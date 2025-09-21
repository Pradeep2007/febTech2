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

const COLLECTION_NAME = 'faqs';

// Get all FAQs
export const getFaqs = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const faqs = [];
    querySnapshot.forEach((doc) => {
      faqs.push({ id: doc.id, ...doc.data() });
    });
    return faqs;
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    throw error;
  }
};

// Add new FAQ
export const addFaq = async (faqData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...faqData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding FAQ:', error);
    throw error;
  }
};

// Update FAQ
export const updateFaq = async (faqId, faqData) => {
  try {
    const faqRef = doc(db, COLLECTION_NAME, faqId);
    await updateDoc(faqRef, {
      ...faqData,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating FAQ:', error);
    throw error;
  }
};

// Delete FAQ
export const deleteFaq = async (faqId) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, faqId));
  } catch (error) {
    console.error('Error deleting FAQ:', error);
    throw error;
  }
};
