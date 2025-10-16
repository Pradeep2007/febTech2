import { db } from '../config/firebase';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs,
  query,
  orderBy,
  Timestamp 
} from 'firebase/firestore';

const COLLECTION_NAME = 'blogs';

// Get all blogs
export const getBlogs = async () => {
  try {
    const blogsRef = collection(db, COLLECTION_NAME);
    const q = query(blogsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    
    const blogs = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate?.() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate?.() || new Date()
    }));
    
    console.log('Loaded blogs from Firebase:', blogs.length);
    return blogs;
  } catch (error) {
    console.error('Error getting blogs:', error);
    return [];
  }
};

// Get published blogs only (for user display)
export const getPublishedBlogs = async () => {
  try {
    const allBlogs = await getBlogs();
    return allBlogs.filter(blog => blog.isPublished === true);
  } catch (error) {
    console.error('Error getting published blogs:', error);
    return [];
  }
};

// Add a new blog
export const addBlog = async (blogData) => {
  try {
    const blogsRef = collection(db, COLLECTION_NAME);
    const newBlog = {
      ...blogData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    };
    
    const docRef = await addDoc(blogsRef, newBlog);
    console.log('Blog added with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding blog:', error);
    throw error;
  }
};

// Update an existing blog
export const updateBlog = async (blogId, blogData) => {
  try {
    const blogRef = doc(db, COLLECTION_NAME, blogId);
    const updatedBlog = {
      ...blogData,
      updatedAt: Timestamp.now()
    };
    
    await updateDoc(blogRef, updatedBlog);
    console.log('Blog updated:', blogId);
  } catch (error) {
    console.error('Error updating blog:', error);
    throw error;
  }
};

// Delete a blog
export const deleteBlog = async (blogId) => {
  try {
    const blogRef = doc(db, COLLECTION_NAME, blogId);
    await deleteDoc(blogRef);
    console.log('Blog deleted:', blogId);
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
};
