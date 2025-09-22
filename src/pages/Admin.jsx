import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { toast, ToastContainer } from '../components/Toast';
import { 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaTimes,
  FaSignInAlt,
  FaUserShield,
  FaBox,
  FaQuestionCircle,
  FaSave,
  FaSearch,
  FaSignOutAlt
} from 'react-icons/fa';
import { 
  getProducts, 
  addProduct, 
  updateProduct, 
  deleteProduct,
  sampleProducts 
} from '../services/productService';
import { 
  getFaqs, 
  addFaq, 
  updateFaq, 
  deleteFaq 
} from '../services/faqService';
import {
  fileToBase64,
  validateBrochureFile
} from '../services/brochureService';
import {
  uploadImageToCloudinary,
  validateImageFile,
  generateImagePreview
} from '../services/cloudinaryService';

const Admin = () => {
  const { currentUser, isAdmin, loading: authLoading, login, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(!currentUser);
  const [searchTerm, setSearchTerm] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    if (isAdmin) {
      loadData();
      setShowLoginForm(false);
    } else if (!authLoading) {
      setShowLoginForm(true);
    }
  }, [isAdmin, authLoading]);

  // Initialize with empty FAQs array so you can add your own
  // const sampleFaqs = [];

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Load products from Firebase
      let productData = await getProducts();
      if (productData.length === 0) {
        productData = sampleProducts;
      }
      
      // Load FAQs from Firebase
      let faqData = await getFaqs();
      
      console.log('Loading data - Products:', productData.length, 'FAQs:', faqData.length);
      setProducts(productData);
      setFaqs(faqData);
    } catch (error) {
      console.error('Error loading data:', error);
      // Fallback to sample data for products, empty for FAQs
      setProducts(sampleProducts);
      setFaqs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (data) => {
    try {
      setLoading(true);
      await login(data.email, data.password);
      setShowLoginForm(false);
      toast.success('Login successful! Welcome to admin dashboard.');
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (product.category || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (product.brand || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const handleAddProduct = () => {
    const resetForm = () => {
      reset({
        name: '',
        sku: '',
        category: '',
        subcategory: '',
        brand: '',
        price: '',
        stock: '',
        description: '',
        specifications: ''
      });
      setImagePreview(null);
      setSelectedCategory('');
      setEditingItem(null);
    };
    setEditingItem(null);
    setActiveTab('products');
    setShowModal(true);
    resetForm();
  };

  const handleEditProduct = (product) => {
    setEditingItem(product);
    setActiveTab('products');
    setShowModal(true);
    setSelectedCategory(product.category || '');
    reset({
      name: product.name,
      sku: product.sku,
      category: product.category,
      subcategory: product.subcategory || '',
      brand: product.brand,
      price: product.price,
      stock: product.stock || product.stockQuantity || 0,
      description: product.description,
      specifications: JSON.stringify(product.specifications || {}, null, 2)
    });
    // Set image preview if product has an image
    setImagePreview(product.imageUrl || null);
  };

  const handleDeleteProduct = async (productId) => {
    console.log('Deleting product with ID:', productId);
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        setLoading(true);
        await deleteProduct(productId);
        await loadData();
        toast.success('Product deleted successfully!');
        console.log('Product deleted successfully');
      } catch (error) {
        console.error('Error deleting product:', error);
        toast.error('Error deleting product: ' + error.message);
      } finally {
        setLoading(false);
      }
    }
  };


  const handleAddFaq = () => {
    setEditingItem(null);
    setActiveTab('faqs');
    setShowModal(true);
    reset({
      category: 'Order Process',
      question: '',
      answer: '',
      isActive: true
    });
  };

  const handleEditFaq = (faq) => {
    setEditingItem(faq);
    setActiveTab('faqs');
    setShowModal(true);
    reset({
      category: faq.category,
      question: faq.question,
      answer: faq.answer,
      isActive: faq.isActive
    });
  };

  const handleDeleteFaq = async (faqId) => {
    console.log('Deleting FAQ with ID:', faqId);
    if (window.confirm('Are you sure you want to delete this FAQ?')) {
      try {
        setLoading(true);
        await deleteFaq(faqId);
        await loadData();
        toast.success('FAQ deleted successfully!');
        console.log('FAQ deleted successfully');
      } catch (error) {
        console.error('Error deleting FAQ:', error);
        toast.error('Error deleting FAQ: ' + error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const onSubmitFaq = async (data) => {
    try {
      setLoading(true);
      const faqData = {
        category: data.category,
        question: data.question,
        answer: data.answer,
        isActive: data.isActive === 'true' || data.isActive === true
      };

      if (editingItem) {
        // Update existing FAQ in Firebase
        await updateFaq(editingItem.id, faqData);
        toast.success('FAQ updated successfully!');
      } else {
        await addFaq(faqData);
        toast.success('FAQ added successfully!');
      }
      
      await loadData();
      setShowModal(false);
      reset();
    } catch (error) {
      console.error('Error saving FAQ:', error);
      toast.error('Error saving FAQ: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle image file selection
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      setImagePreview(null);
      return;
    }

    try {
      validateImageFile(file);
      const preview = await generateImagePreview(file);
      setImagePreview(preview);
    } catch (error) {
      toast.error(error.message);
      event.target.value = ''; // Clear the input
      setImagePreview(null);
    }
  };

  const onSubmitProduct = async (data) => {
    try {
      setLoading(true);
      const stockValue = parseInt(data.stock) || 0;
      
      // Handle image upload
      const imageInput = document.getElementById('product-image-input');
      const imageFile = imageInput?.files[0];
      let imageData = null;

      if (imageFile) {
        try {
          setUploadingImage(true);
          imageData = await uploadImageToCloudinary(imageFile, 'products');
          toast.success('Image uploaded successfully!');
        } catch (error) {
          toast.error('Error uploading image: ' + error.message);
          return;
        } finally {
          setUploadingImage(false);
        }
      }

      // Handle brochure upload
      const fileInput = document.getElementById('brochure-file-input');
      const file = fileInput?.files[0];
      let brochureData = null;
      
      console.log('File input found:', !!fileInput);
      console.log('File selected:', !!file);
      if (file) {
        console.log('File details:', {
          name: file.name,
          size: file.size,
          type: file.type
        });
      }
      
      if (file) {
        try {
          // Validate file
          validateBrochureFile(file);
          
          // Check file size (1MB = 1,048,576 bytes, but base64 adds ~33% overhead)
          const maxSize = 750000; // ~750KB to account for base64 overhead
          if (file.size > maxSize) {
            toast.error(`File too large! Maximum size is ${Math.round(maxSize/1024)}KB. Your file is ${Math.round(file.size/1024)}KB. Please compress the file.`);
            return;
          }
          
          // Convert to base64
          const base64Data = await fileToBase64(file);
          
          brochureData = {
            fileName: file.name,
            fileType: file.type,
            fileSize: file.size,
            base64Data: base64Data,
            uploadedAt: new Date().toISOString()
          };
        } catch (fileError) {
          toast.error('Error processing brochure: ' + fileError.message);
          return;
        }
      }
      
      const productData = {
        name: data.name,
        sku: data.sku || `SKU-${Date.now()}`,
        category: data.category,
        subcategory: data.subcategory || '',
        brand: data.brand || '',
        price: parseFloat(data.price) || 0,
        stock: stockValue,
        stockQuantity: stockValue,
        inStock: stockValue > 0,
        description: data.description,
        specifications: data.specifications ? JSON.parse(data.specifications) : {},
        // Image data (Cloudinary)
        imageUrl: imageData?.url || null,
        imagePublicId: imageData?.publicId || null,
        imageOriginalName: imageData?.originalName || null,
        imageSize: imageData?.size || null,
        imageType: imageData?.type || null,
        hasImage: !!imageData,
        // Flatten brochure data to avoid nested object issues
        brochureFileName: brochureData?.fileName || null,
        brochureFileType: brochureData?.fileType || null,
        brochureFileSize: brochureData?.fileSize || null,
        brochureBase64Data: brochureData?.base64Data || null,
        brochureUploadedAt: brochureData?.uploadedAt || null,
        hasBrochure: !!brochureData
      };

      console.log('Product data to save:', {
        ...productData,
        brochureBase64Data: brochureData?.base64Data ? `${brochureData.base64Data.substring(0, 50)}...` : null
      });

      if (editingItem) {
        // If no new image uploaded, keep existing image data
        if (!imageFile && editingItem.hasImage) {
          productData.imageUrl = editingItem.imageUrl;
          productData.imagePublicId = editingItem.imagePublicId;
          productData.imageOriginalName = editingItem.imageOriginalName;
          productData.imageSize = editingItem.imageSize;
          productData.imageType = editingItem.imageType;
          productData.hasImage = true;
        }
        // If no new file uploaded, keep existing brochure data
        if (!file && editingItem.hasBrochure) {
          productData.brochureFileName = editingItem.brochureFileName;
          productData.brochureFileType = editingItem.brochureFileType;
          productData.brochureFileSize = editingItem.brochureFileSize;
          productData.brochureBase64Data = editingItem.brochureBase64Data;
          productData.brochureUploadedAt = editingItem.brochureUploadedAt;
          productData.hasBrochure = true;
        }
        // Update existing product in Firebase
        await updateProduct(editingItem.id, productData);
        toast.success('Product updated successfully!');
        console.log('Product updated successfully in Firebase');
      } else {
        // Add new product to Firebase
        await addProduct(productData);
        toast.success('Product added successfully!');
        console.log('Product added successfully to Firebase');
      }

      // Reload data from Firebase
      await loadData();
      setShowModal(false);
      reset();
    } catch (error) {
      console.error('Error saving product:', error);
      toast.error('Error saving product: ' + error.message);
    } finally {
      setLoading(false);
    }
  };


  // Login Form Component
  const LoginForm = () => {
    const { register: loginRegister, handleSubmit: handleLoginSubmit } = useForm();

    return (
      <div className="min-h-screen bg-light-gray flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <FaUserShield className="text-4xl text-teal-prime mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
            <p className="text-gray-600">Access the admin dashboard</p>
          </div>

          <form onSubmit={handleLoginSubmit(handleLogin)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                {...loginRegister('email', { required: 'Email is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-prime focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                {...loginRegister('password', { required: 'Password is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-prime focus:border-transparent"
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary flex items-center justify-center"
            >
              {loading ? (
                <div className="loading-spinner w-5 h-5 border-2"></div>
              ) : (
                <>
                  <FaSignInAlt className="mr-2" />
                  Login
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    );
  };


  // Show loading spinner while auth state is being restored
  if (authLoading) {
    return (
      <div className="min-h-screen bg-light-gray flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner w-8 h-8 border-4 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (showLoginForm || !isAdmin) {
    return <LoginForm />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-light-gray"
    >
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container-max py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage products and FAQs</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-green-600">
                <FaUserShield className="mr-2" />
                <span className="font-medium">{currentUser?.email}</span>
              </div>
              <button
                onClick={logout}
                className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="container-max py-8">
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('products')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'products'
                    ? 'border-teal-prime text-teal-prime'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaBox className="inline mr-2" />
                Products ({products.length})
              </button>
              <button
                onClick={() => setActiveTab('faqs')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'faqs'
                    ? 'border-teal-prime text-teal-prime'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaQuestionCircle className="inline mr-2" />
                FAQs ({faqs.length})
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Search and Add Button */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div className="relative mb-4 md:mb-0">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={`Search ${activeTab}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-prime focus:border-transparent"
                />
              </div>
              <button
                onClick={activeTab === 'products' ? handleAddProduct : handleAddFaq}
                className="btn-primary flex items-center"
              >
                <FaPlus className="mr-2" />
                Add {activeTab === 'products' ? 'Product' : 'FAQ'}
              </button>
            </div>

            {/* Products Tab */}
            {activeTab === 'products' && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        SKU
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Brand
                      </th> */}
                      {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th> */}
                      {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Stock
                      </th> */}
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredProducts.map((product) => (
                      <tr key={product.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {product.sku || '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            {product.category}
                          </span>
                        </td>
                        {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {product.brand}
                        </td> */}
                        {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ${product.price}
                        </td> */}
                        {/* <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            (product.stock || product.stockQuantity) > 50 ? 'bg-green-100 text-green-800' :
                            (product.stock || product.stockQuantity) > 10 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {product.stock || product.stockQuantity} units
                          </span>
                        </td> */}
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleEditProduct(product)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* FAQs Tab */}
            {activeTab === 'faqs' && (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-teal-100 text-teal-800 mr-2">
                            {faq.category}
                          </span>
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            faq.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {faq.isActive ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button
                          onClick={() => handleEditFaq(faq)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteFaq(faq.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Modal for Add/Edit */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {editingItem ? 'Edit' : 'Add'} {activeTab === 'products' ? 'Product' : 'FAQ'}
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FaTimes />
                </button>
              </div>

              {activeTab === 'products' ? (
                <form onSubmit={handleSubmit(onSubmitProduct)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Product Name *
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: 'Product name is required' })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-prime focus:border-transparent"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    {/* SKU Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        SKU Number *
                      </label>
                      <input
                        type="text"
                        {...register('sku', { required: 'SKU is required' })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-prime focus:border-transparent"
                        placeholder="e.g., SKU-12345"
                      />
                      {errors.sku && <p className="text-red-500 text-sm mt-1">{errors.sku.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category *
                      </label>
                      <select
                        {...register('category', { required: 'Category is required' })}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-prime focus:border-transparent"
                      >
                        <option value="">Select Category</option>
                        <option value="Harmone analyzer">Harmone analyzer</option>
                        <option value="Biochemistry analyzer">Biochemistry analyzer</option>
                      </select>
                    </div>

                    {/* Subcategory field - only show for Harmone analyzer */}
                    {selectedCategory === 'Harmone analyzer' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Subcategory *
                        </label>
                        <select
                          {...register('subcategory', { required: selectedCategory === 'Harmone analyzer' ? 'Subcategory is required' : false })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-prime focus:border-transparent"
                        >
                          <option value="">Select Subcategory</option>
                          <option value="Alinity family">Alinity family</option>
                          <option value="Architect family">Architect family</option>
                        </select>
                        {errors.subcategory && <p className="text-red-500 text-sm mt-1">{errors.subcategory.message}</p>}
                      </div>
                    )}


                    {/* <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Price *
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        {...register('price', { required: 'Price is required' })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-prime focus:border-transparent"
                      />
                    </div> */}

                    {/* <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Stock Quantity *
                      </label>
                      <input
                        type="number"
                        {...register('stock', { required: 'Stock is required' })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-prime focus:border-transparent"
                      />
                    </div> */}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description *
                    </label>
                    <textarea
                      {...register('description', { required: 'Description is required' })}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-prime focus:border-transparent"
                    />
                  </div>

                  {/* Product Image Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Product Image (JPEG, PNG, WebP - Max 5MB)
                    </label>
                    <input
                      id="product-image-input"
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      onChange={handleImageChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-prime focus:border-transparent"
                    />
                    <p className="text-gray-500 text-xs mt-1">
                      Upload a product image. Supported formats: JPEG, PNG, WebP. Maximum file size: 5MB
                    </p>
                    {imagePreview && (
                      <div className="mt-3">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-32 h-32 object-cover rounded-lg border border-gray-300"
                        />
                      </div>
                    )}
                    {uploadingImage && (
                      <div className="mt-2 flex items-center text-blue-600">
                        <div className="loading-spinner w-4 h-4 border-2 mr-2"></div>
                        <span className="text-sm">Uploading image...</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Product Brochure (PDF, JPG, PNG - Max 750KB)
                    </label>
                    <input
                      id="brochure-file-input"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-prime focus:border-transparent"
                    />
                    <p className="text-gray-500 text-xs mt-1">
                      Upload a brochure for this product. Supported formats: PDF, JPEG, PNG. Maximum file size: 750KB (due to Firestore limitations)
                    </p>
                  </div>

                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Specifications (JSON format)
                    </label>
                    <textarea
                      {...register('specifications')}
                      rows="4"
                      placeholder='{"key": "value", "key2": "value2"}'
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-prime focus:border-transparent font-mono text-sm"
                    />
                  </div> */}

                  <div className="flex justify-end space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn-primary flex items-center">
                      <FaSave className="mr-2" />
                      {editingItem ? 'Update' : 'Add'} Product
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSubmit(onSubmitFaq)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category *
                    </label>
                    <select
                      {...register('category', { required: 'Category is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-prime focus:border-transparent"
                    >
                      <option value="Order Process">Order Process</option>
                      <option value="Support">Support</option>
                      <option value="Product Category">Product Category</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Question *
                    </label>
                    <input
                      type="text"
                      {...register('question', { required: 'Question is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-prime focus:border-transparent"
                    />
                    {errors.question && <p className="text-red-500 text-sm mt-1">{errors.question.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Answer *
                    </label>
                    <textarea
                      {...register('answer', { required: 'Answer is required' })}
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-prime focus:border-transparent"
                    />
                    {errors.answer && <p className="text-red-500 text-sm mt-1">{errors.answer.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Status
                    </label>
                    <select
                      {...register('isActive')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-prime focus:border-transparent"
                    >
                      <option value={true}>Active</option>
                      <option value={false}>Inactive</option>
                    </select>
                  </div>

                  <div className="flex justify-end space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn-primary flex items-center">
                      <FaSave className="mr-2" />
                      {editingItem ? 'Update' : 'Add'} FAQ
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </motion.div>
  );
};

export default Admin;