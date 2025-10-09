import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { db } from '../config/firebase';

const COLLECTION_NAME = 'categories';

// Get all categories
export const getCategories = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const categories = [];
    querySnapshot.forEach((doc) => {
      categories.push({ id: doc.id, ...doc.data() });
    });
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// Add new category
export const addCategory = async (categoryData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...categoryData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding category:', error);
    throw error;
  }
};

// Update category
export const updateCategory = async (categoryId, categoryData) => {
  try {
    const categoryRef = doc(db, COLLECTION_NAME, categoryId);
    await updateDoc(categoryRef, {
      ...categoryData,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating category:', error);
    throw error;
  }
};

// Delete category
export const deleteCategory = async (categoryId) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, categoryId));
  } catch (error) {
    console.error('Error deleting category:', error);
    throw error;
  }
};

// Default categories for initial setup
export const defaultCategories = [
  {
    id: 'default-1',
    name: 'Equipment',
    subcategories: [
      'Diagnostic Equipment',
      'Laboratory Equipment', 
      'Medical Supplies'
    ],
    isActive: true
  },
  {
    id: 'default-2',
    name: 'Medicines',
    subcategories: [
      'Antibiotics',
      'Diabetes Care'
    ],
    isActive: true
  },
  {
    id: 'default-3',
    name: 'Harmone analyzer',
    subcategories: [
      'Alinity family',
      'Architect family'
    ],
    isActive: true
  },
  {
    id: 'default-4',
    name: 'Biochemistry analyzer',
    subcategories: [],
    isActive: true
  }
];

// Merge categories with same name and combine subcategories
const mergeCategories = (categories) => {
  const merged = {};
  
  categories.forEach(category => {
    if (merged[category.name]) {
      // Merge subcategories, avoiding duplicates
      const existingSubcategories = merged[category.name].subcategories || [];
      const newSubcategories = category.subcategories || [];
      const combinedSubcategories = [...new Set([...existingSubcategories, ...newSubcategories])];
      
      merged[category.name] = {
        ...merged[category.name],
        subcategories: combinedSubcategories,
        // Keep the most recent update time
        updatedAt: category.updatedAt > merged[category.name].updatedAt ? category.updatedAt : merged[category.name].updatedAt
      };
    } else {
      merged[category.name] = { ...category };
    }
  });
  
  return Object.values(merged);
};

// Get categories with fallback to defaults
export const getCategoriesWithFallback = async () => {
  try {
    const categories = await getCategories();
    
    // If no categories in Firebase, return defaults
    if (categories.length === 0) {
      return defaultCategories;
    }
    
    // Merge categories with same name
    const mergedCategories = mergeCategories(categories);
    return mergedCategories;
  } catch (error) {
    console.error('Error loading categories, using defaults:', error);
    return defaultCategories;
  }
};

// Helper function to get all category and subcategory options for dropdowns
export const getCategoryOptions = async () => {
  try {
    const categories = await getCategoriesWithFallback();
    const options = [];
    
    categories.forEach(category => {
      if (category.isActive) {
        // Add main category
        options.push({
          value: category.name,
          label: category.name,
          type: 'category'
        });
        
        // Add subcategories
        if (category.subcategories && category.subcategories.length > 0) {
          category.subcategories.forEach(subcategory => {
            options.push({
              value: subcategory,
              label: `${category.name} > ${subcategory}`,
              type: 'subcategory',
              parentCategory: category.name
            });
          });
        }
      }
    });
    
    return options;
  } catch (error) {
    console.error('Error getting category options:', error);
    return [];
  }
};
