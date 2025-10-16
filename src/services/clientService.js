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

const COLLECTION_NAME = 'clients';

// Sample clients data for fallback
export const sampleClients = [
  {
    id: 'sample-1',
    name: 'Civil Hospital Amdabad',
    description: 'Leading government hospital providing comprehensive healthcare services',
    logoUrl: '/src/assets/images/client1.jpg',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'sample-2',
    name: 'U.N. Mehta Institute of Cardiology and Research Center',
    description: 'Premier cardiac care and research institution',
    logoUrl: '/src/assets/images/client6.png',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'sample-3',
    name: 'Government Medical College, Bhavnagar',
    description: 'Medical education and healthcare institution',
    logoUrl: '/src/assets/images/client8.png',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'sample-4',
    name: 'Cliantha Clinical Research',
    description: 'Clinical research and pharmaceutical development',
    logoUrl: '/src/assets/images/client3.jpg',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'sample-5',
    name: 'Lambda Research Accelerated',
    description: 'Advanced research and development laboratory',
    logoUrl: '/src/assets/images/client5.png',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'sample-6',
    name: 'Shalby Multi-Specialty Care',
    description: 'Multi-specialty healthcare provider',
    logoUrl: '/src/assets/images/client7.jpg',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'sample-7',
    name: 'Sanjeevani Pathology Laboratory',
    description: 'Diagnostic and pathology services',
    logoUrl: '/src/assets/images/client2.jpg',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'sample-8',
    name: 'Intas Pharmaceuticals',
    description: 'Pharmaceutical manufacturing and distribution',
    logoUrl: '/src/assets/images/client4.jpg',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Get all clients
export const getClients = async () => {
  try {
    const clientsRef = collection(db, COLLECTION_NAME);
    const q = query(clientsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    
    const clients = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate?.() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate?.() || new Date()
    }));
    
    console.log('Loaded clients from Firebase:', clients.length);
    return clients;
  } catch (error) {
    console.error('Error getting clients:', error);
    return [];
  }
};

// Get clients with fallback to sample data
export const getClientsWithFallback = async () => {
  try {
    const clients = await getClients();
    if (clients.length === 0) {
      console.log('No clients found in Firebase, using sample data');
      return sampleClients;
    }
    return clients;
  } catch (error) {
    console.error('Error getting clients, using sample data:', error);
    return sampleClients;
  }
};

// Get active clients only (for user display)
export const getActiveClients = async () => {
  try {
    const allClients = await getClientsWithFallback();
    return allClients.filter(client => client.isActive === true);
  } catch (error) {
    console.error('Error getting active clients:', error);
    return sampleClients.filter(client => client.isActive === true);
  }
};

// Add a new client
export const addClient = async (clientData) => {
  try {
    const clientsRef = collection(db, COLLECTION_NAME);
    const newClient = {
      ...clientData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    };
    
    const docRef = await addDoc(clientsRef, newClient);
    console.log('Client added with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding client:', error);
    throw error;
  }
};

// Update an existing client
export const updateClient = async (clientId, clientData) => {
  try {
    const clientRef = doc(db, COLLECTION_NAME, clientId);
    const updatedClient = {
      ...clientData,
      updatedAt: Timestamp.now()
    };
    
    await updateDoc(clientRef, updatedClient);
    console.log('Client updated:', clientId);
  } catch (error) {
    console.error('Error updating client:', error);
    throw error;
  }
};

// Delete a client
export const deleteClient = async (clientId) => {
  try {
    const clientRef = doc(db, COLLECTION_NAME, clientId);
    await deleteDoc(clientRef);
    console.log('Client deleted:', clientId);
  } catch (error) {
    console.error('Error deleting client:', error);
    throw error;
  }
};
