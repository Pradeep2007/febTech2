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
import { deleteImageFromCloudinary } from './cloudinaryService';

const COLLECTION_NAME = 'products';

// Get all products
export const getProducts = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Add new product
export const addProduct = async (productData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...productData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

// Update product
export const updateProduct = async (productId, productData) => {
  try {
    const productRef = doc(db, COLLECTION_NAME, productId);
    await updateDoc(productRef, {
      ...productData,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

// Delete product
export const deleteProduct = async (productId) => {
  try {
    // Get the product first to check if it has an image
    const products = await getProducts();
    const product = products.find(p => p.id === productId);
    
    // Delete the product image from Cloudinary if it exists
    if (product && product.imagePublicId) {
      await deleteImageFromCloudinary(product.imagePublicId);
    }
    
    // Delete the product document
    await deleteDoc(doc(db, COLLECTION_NAME, productId));
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

// Sample products data for initial setup
export const sampleProducts = [
  {
    id: 'sample-1',
    name: 'Digital Blood Pressure Monitor',
    category: 'Equipment',
    subcategory: 'Diagnostic Equipment',
    brand: 'Sysmax-Biosystems',
    sku: 'SYS-BP-001',
    price: 299.99,
    description: 'Professional-grade digital blood pressure monitor with advanced accuracy technology.',
    specifications: {
      'Measurement Range': '0-300 mmHg',
      'Accuracy': '±3 mmHg',
      'Memory': '100 readings',
      'Display': 'Large LCD',
      'Power': 'AC adapter or batteries'
    },
    inStock: true,
    stockQuantity: 50,
    image: '/api/placeholder/400/300'
  },
  {
    id: 'sample-2',
    name: 'Automated Hematology Analyzer',
    category: 'Equipment',
    subcategory: 'Laboratory Equipment',
    brand: 'Sysmax-Biosystems',
    sku: 'SYS-HEM-002',
    price: 15999.99,
    description: 'High-throughput automated hematology analyzer for complete blood count analysis.',
    specifications: {
      'Throughput': '60 samples/hour',
      'Parameters': '22 parameters + 3 histograms',
      'Sample Volume': '20μL whole blood',
      'Display': '10.4" touchscreen',
      'Connectivity': 'LIS compatible'
    },
    inStock: true,
    stockQuantity: 5,
    image: '/api/placeholder/400/300'
  },
  {
    id: 'sample-3',
    name: 'Amoxicillin 500mg Capsules',
    category: 'Medicines',
    subcategory: 'Antibiotics',
    brand: 'Rest Inc.',
    sku: 'REST-AMX-500',
    price: 24.99,
    description: 'Broad-spectrum antibiotic for bacterial infections. Generic equivalent.',
    specifications: {
      'Active Ingredient': 'Amoxicillin 500mg',
      'Form': 'Capsules',
      'Pack Size': '30 capsules',
      'Storage': 'Store below 25°C',
      'Expiry': '24 months from manufacture'
    },
    inStock: true,
    stockQuantity: 200,
    image: '/api/placeholder/400/300'
  },
  {
    id: 'sample-4',
    name: 'Surgical Gloves - Latex Free',
    category: 'Equipment',
    subcategory: 'Medical Supplies',
    brand: 'Rest Inc.',
    sku: 'REST-GLV-001',
    price: 89.99,
    description: 'Premium latex-free surgical gloves for sensitive procedures.',
    specifications: {
      'Material': 'Nitrile',
      'Size Range': 'XS to XL',
      'Pack Size': '100 pairs',
      'Powder': 'Powder-free',
      'Sterility': 'Sterile'
    },
    inStock: true,
    stockQuantity: 150,
    image: '/api/placeholder/400/300'
  },
  {
    id: 'sample-5',
    name: 'Insulin Pen Needles',
    category: 'Equipment',
    subcategory: 'Medical Supplies',
    brand: 'Sysmax-Biosystems',
    sku: 'SYS-INS-003',
    price: 34.99,
    description: 'Ultra-fine insulin pen needles for comfortable injections.',
    specifications: {
      'Gauge': '32G',
      'Length': '4mm',
      'Pack Size': '100 needles',
      'Compatibility': 'Universal fit',
      'Features': 'Ultra-thin wall technology'
    },
    inStock: true,
    stockQuantity: 300,
    image: '/api/placeholder/400/300'
  },
  {
    id: 'sample-6',
    name: 'Metformin 850mg Tablets',
    category: 'Medicines',
    subcategory: 'Diabetes Care',
    brand: 'Rest Inc.',
    sku: 'REST-MET-850',
    price: 18.99,
    description: 'Type 2 diabetes medication for blood sugar control.',
    specifications: {
      'Active Ingredient': 'Metformin HCl 850mg',
      'Form': 'Film-coated tablets',
      'Pack Size': '60 tablets',
      'Storage': 'Store below 30°C',
      'Expiry': '36 months from manufacture'
    },
    inStock: true,
    stockQuantity: 180,
    image: '/api/placeholder/400/300'
  }
];
