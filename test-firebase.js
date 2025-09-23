// Test Firebase Connection Script
// Run this in your browser console to test Firebase connectivity

import { db } from './src/config/firebase.js';
import { collection, addDoc, getDocs } from 'firebase/firestore';

// Test function to verify Firebase connection and permissions
async function testFirebaseConnection() {
  console.log('🔥 Testing Firebase connection...');
  
  try {
    // Test 1: Try to read from faqs collection
    console.log('📖 Testing read permissions...');
    const faqsRef = collection(db, 'faqs');
    const snapshot = await getDocs(faqsRef);
    console.log('✅ Read test passed! Found', snapshot.size, 'documents');
    
    // Test 2: Try to write to faqs collection
    console.log('✏️ Testing write permissions...');
    const testDoc = {
      question: 'Test FAQ - Can be deleted',
      answer: 'This is a test FAQ created to verify Firebase permissions.',
      category: 'Support',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const docRef = await addDoc(faqsRef, testDoc);
    console.log('✅ Write test passed! Document created with ID:', docRef.id);
    
    console.log('🎉 All tests passed! Firebase is working correctly.');
    return true;
    
  } catch (error) {
    console.error('❌ Firebase test failed:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    
    if (error.code === 'permission-denied') {
      console.log('🔧 SOLUTION: You need to update your Firestore rules in Firebase Console');
      console.log('👉 Go to: https://console.firebase.google.com/project/fabtech-inc/firestore/rules');
    }
    
    return false;
  }
}

// Run the test
testFirebaseConnection();
