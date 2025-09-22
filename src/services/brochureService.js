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

const COLLECTION_NAME = 'brochures';

// Convert file to base64
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

// Upload brochure to Firebase
export const uploadBrochure = async (brochureData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...brochureData,
      uploadedAt: new Date(),
      isActive: true
    });
    console.log('Brochure uploaded with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error uploading brochure: ', error);
    throw error;
  }
};

// Get all brochures from Firebase
export const getBrochures = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('uploadedAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const brochures = [];
    
    querySnapshot.forEach((doc) => {
      brochures.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return brochures;
  } catch (error) {
    console.error('Error getting brochures: ', error);
    return [];
  }
};

// Get active brochures only
export const getActiveBrochures = async () => {
  try {
    const brochures = await getBrochures();
    return brochures.filter(brochure => brochure.isActive);
  } catch (error) {
    console.error('Error getting active brochures: ', error);
    return [];
  }
};

// Update brochure
export const updateBrochure = async (id, updateData) => {
  try {
    const brochureRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(brochureRef, {
      ...updateData,
      updatedAt: new Date()
    });
    console.log('Brochure updated successfully');
  } catch (error) {
    console.error('Error updating brochure: ', error);
    throw error;
  }
};

// Delete brochure
export const deleteBrochure = async (id) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
    console.log('Brochure deleted successfully');
  } catch (error) {
    console.error('Error deleting brochure: ', error);
    throw error;
  }
};

// Download brochure (convert base64 to downloadable file)
export const downloadBrochure = (base64Data, filename) => {
  try {
    // Create a link element
    const link = document.createElement('a');
    link.href = base64Data;
    link.download = filename;
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading brochure: ', error);
    throw error;
  }
};

// Validate file type and size
export const validateBrochureFile = (file) => {
  const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
  const maxSize = 5 * 1024 * 1024; // 5MB
  
  if (!allowedTypes.includes(file.type)) {
    throw new Error('Only PDF, JPEG, PNG files are allowed');
  }
  
  if (file.size > maxSize) {
    throw new Error('File size must be less than 5MB');
  }
  
  return true;
};
