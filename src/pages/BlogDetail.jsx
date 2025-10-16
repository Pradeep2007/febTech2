import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaArrowLeft } from 'react-icons/fa';
import { getBlogs } from '../services/blogService';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlog();
  }, [id]);

  const loadBlog = async () => {
    try {
      setLoading(true);
      const blogs = await getBlogs();
      const foundBlog = blogs.find(b => b.id === id);
      
      if (foundBlog && foundBlog.isPublished) {
        setBlog(foundBlog);
      } else {
        // Blog not found or not published
        navigate('/blog');
      }
    } catch (error) {
      console.error('Error loading blog:', error);
      navigate('/blog');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    try {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return '';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-light-gray pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner w-12 h-12 border-4 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-light-gray pt-20"
    >
      {/* Back Button */}
      <div className="container-max py-6">
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-teal-prime hover:text-teal-600 font-semibold transition-colors"
        >
          <FaArrowLeft />
          Back to Blogs
        </button>
      </div>

      {/* Blog Content */}
      <article className="container-max pb-12 lg:pb-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Featured Image */}
          {blog.imageUrl && (
            <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Blog Header */}
          <div className="p-6 md:p-8 lg:p-12">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
              {blog.author && (
                <div className="flex items-center gap-2">
                  <FaUser />
                  <span>{blog.author}</span>
                </div>
              )}
              {blog.createdAt && (
                <div className="flex items-center gap-2">
                  <FaCalendar />
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {blog.title}
            </h1>

            {/* Excerpt */}
            {blog.excerpt && (
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                {blog.excerpt}
              </p>
            )}

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {blog.content}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mt-12 pt-8">
              <button
                onClick={() => navigate('/blog')}
                className="flex items-center gap-2 text-teal-prime hover:text-teal-600 font-semibold transition-colors"
              >
                <FaArrowLeft />
                Back to all blogs
              </button>
            </div>
          </div>
        </motion.div>
      </article>
    </motion.div>
  );
};

export default BlogDetail;
