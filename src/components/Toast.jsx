import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa';

let toastId = 0;
const toasts = [];
let setToastsCallback = null;

export const toast = {
  success: (message) => {
    addToast(message, 'success');
  },
  error: (message) => {
    addToast(message, 'error');
  }
};

const addToast = (message, type) => {
  const id = ++toastId;
  const newToast = { id, message, type };
  toasts.push(newToast);
  
  if (setToastsCallback) {
    setToastsCallback([...toasts]);
  }
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    removeToast(id);
  }, 3000);
};

const removeToast = (id) => {
  const index = toasts.findIndex(toast => toast.id === id);
  if (index > -1) {
    toasts.splice(index, 1);
    if (setToastsCallback) {
      setToastsCallback([...toasts]);
    }
  }
};

export const ToastContainer = () => {
  const [currentToasts, setCurrentToasts] = useState([]);
  
  useEffect(() => {
    setToastsCallback = setCurrentToasts;
    setCurrentToasts([...toasts]);
    
    return () => {
      setToastsCallback = null;
    };
  }, []);
  
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {currentToasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 300, scale: 0.3 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.5, transition: { duration: 0.2 } }}
            className={`
              flex items-center p-4 rounded-lg shadow-lg min-w-[300px] max-w-[400px]
              ${toast.type === 'success' 
                ? 'bg-green-50 border-l-4 border-green-400 text-green-800' 
                : 'bg-red-50 border-l-4 border-red-400 text-red-800'
              }
            `}
          >
            <div className="flex-shrink-0">
              {toast.type === 'success' ? (
                <FaCheckCircle className="w-5 h-5 text-green-400" />
              ) : (
                <FaExclamationCircle className="w-5 h-5 text-red-400" />
              )}
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium">{toast.message}</p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-600"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
