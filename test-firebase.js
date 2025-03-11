// Test script to verify Firebase connectivity
// Run this in the browser console to test your Firebase configuration

(function() {
  console.log('Testing Firebase connectivity...');
  
  // Check if Firebase is loaded
  if (typeof firebase === 'undefined') {
    console.error('Firebase is not loaded. Make sure you have included the Firebase SDK.');
    return;
  }
  
  // Firebase configuration from .env.local
  const firebaseConfig = {
    apiKey: "AIzaSyB-7z1B_qVzkq8EP-_JphgP0m6vtOj1nBc",
    authDomain: "fire-protection-attorneys.firebaseapp.com",
    projectId: "fire-protection-attorneys",
    storageBucket: "fire-protection-attorneys.firebasestorage.app",
    messagingSenderId: "601863278083",
    appId: "1:601863278083:web:aad1ba6559a02b4a790836"
  };
  
  // Initialize Firebase
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    console.log('Firebase initialized successfully');
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    return;
  }
  
  // Test Firestore connectivity
  try {
    const db = firebase.firestore();
    console.log('Firestore initialized successfully');
    
    // Try to write a test document
    db.collection('test')
      .add({
        timestamp: new Date(),
        message: 'Test document'
      })
      .then(docRef => {
        console.log('Test document written successfully with ID:', docRef.id);
        
        // Clean up - delete the test document
        docRef.delete()
          .then(() => {
            console.log('Test document deleted successfully');
          })
          .catch(error => {
            console.error('Error deleting test document:', error);
          });
      })
      .catch(error => {
        console.error('Error writing test document:', error);
      });
  } catch (error) {
    console.error('Error testing Firestore:', error);
  }
})(); 