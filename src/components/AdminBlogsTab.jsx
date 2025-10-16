import { FaEdit, FaTrash } from 'react-icons/fa';

const AdminBlogsTab = ({ filteredBlogs, handleEditBlog, handleDeleteBlog }) => {
  const formatDate = (date) => {
    if (!date) return '';
    try {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (error) {
      return '';
    }
  };

  return (
    <div className="space-y-4">
      {filteredBlogs.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No blogs found. Click "Add Blog" to create your first blog post.
        </div>
      ) : (
        filteredBlogs.map((blog) => (
          <div key={blog.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              {/* Blog Image */}
              {blog.imageUrl && (
                <div className="flex-shrink-0">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full sm:w-32 h-24 object-cover rounded-lg"
                  />
                </div>
              )}

              {/* Blog Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    blog.isPublished ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {blog.isPublished ? 'Published' : 'Draft'}
                  </span>
                  {blog.author && (
                    <span className="text-xs text-gray-500">By {blog.author}</span>
                  )}
                  {blog.createdAt && (
                    <span className="text-xs text-gray-500">• {formatDate(blog.createdAt)}</span>
                  )}
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg line-clamp-2">
                  {blog.title}
                </h3>
                
                {blog.excerpt && (
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-2">
                    {blog.excerpt}
                  </p>
                )}
              </div>

              {/* Actions */}
              <div className="flex sm:flex-col gap-2 self-end sm:self-start">
                <button
                  onClick={() => handleEditBlog(blog)}
                  className="text-blue-600 hover:text-blue-900 p-2 hover:bg-blue-50 rounded transition-colors"
                  title="Edit blog"
                >
                  <FaEdit className="text-lg" />
                </button>
                <button
                  onClick={() => handleDeleteBlog(blog.id)}
                  className="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded transition-colors"
                  title="Delete blog"
                >
                  <FaTrash className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminBlogsTab;
