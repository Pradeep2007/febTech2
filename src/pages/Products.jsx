import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFilter, 
  FaSearch, 
  FaInfoCircle,
  FaTimes,
  FaDownload,
  FaFileAlt
} from 'react-icons/fa';
import { getProducts, sampleProducts } from '../services/productService';
import { getCategoriesWithFallback } from '../services/categoryService';

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  // Handle URL query parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const filterParam = searchParams.get('filter');
    if (filterParam) {
      console.log('Setting category from URL:', filterParam);
      setSelectedCategory(filterParam);
    }
  }, [location.search]);

  useEffect(() => {
    console.log('useEffect triggered:', { products: products.length, searchTerm, selectedCategory });
    filterProducts();
  }, [products, searchTerm, selectedCategory]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      
      // Load products and categories in parallel
      const [productData, categoryData] = await Promise.all([
        getProducts(),
        getCategoriesWithFallback()
      ]);
      
      // If no products in Firebase, use sample data
      const finalProducts = productData.length === 0 ? sampleProducts : productData;
      
      setProducts(finalProducts);
      setCategories(categoryData);
    } catch (error) {
      console.error('Error loading data:', error);
      // Fallback to sample data
      setProducts(sampleProducts);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    console.log('filterProducts called with:', { 
      productsLength: products.length, 
      selectedCategory, 
      searchTerm 
    });

    // If no products, set empty filtered array
    if (!products || products.length === 0) {
      console.log('No products loaded yet, setting empty array');
      setFilteredProducts([]);
      return;
    }

    let filtered = [...products]; // Create a copy

    // Filter by search term
    if (searchTerm) {
      console.log('Searching for:', searchTerm);
      const beforeSearchCount = filtered.length;
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.category && product.category.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (product.subcategory && product.subcategory.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      console.log(`Search filtered from ${beforeSearchCount} to ${filtered.length} products`);
      console.log('Search results:', filtered.map(p => ({ 
        name: p.name, 
        category: p.category, 
        subcategory: p.subcategory 
      })));
    }

    // Filter by category or subcategory
    if (selectedCategory && selectedCategory !== 'All') {
      console.log('Filtering by category:', selectedCategory);
      console.log('Available products:', filtered.map(p => ({ 
        name: p.name, 
        category: p.category, 
        subcategory: p.subcategory 
      })));
      
      const beforeCount = filtered.length;
      filtered = filtered.filter(product => 
        product.category === selectedCategory || 
        product.subcategory === selectedCategory
      );
      
      console.log(`Filtered from ${beforeCount} to ${filtered.length} products`);
      console.log('Matching products:', filtered.map(p => p.name));
    }

    console.log('Setting filtered products:', filtered.length);
    setFilteredProducts(filtered);
  };

  // Generate category options from loaded categories
  const allCategories = [
    {
      name: 'All',
      value: 'All',
      isCategory: true
    },
    ...categories.filter(category => category.isActive).map(category => ({
      name: category.name,
      value: category.name,
      isCategory: true,
      subcategories: category.subcategories ? category.subcategories.map(sub => ({ name: sub, value: sub })) : []
    }))
  ];
  console.log('Generated categories:', allCategories);

  const ProductCard = ({ product }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="relative rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow overflow-hidden"
    >
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        {product.imageUrl ? (
          <>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {/* Zoom on hover */}
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.4 }}
            />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
          </>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-medium border border-teal-100">
            {product.category}
          </span>
          {product.subcategory && (
            <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
              {product.subcategory}
            </span>
          )}
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        {/* Specs preview (up to 3) */}
        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {Object.entries(product.specifications).slice(0,3).map(([key, value]) => (
              <span key={key} className="px-2 py-1 rounded-full bg-gray-50 text-gray-700 text-xs border border-gray-200">
                {key}: {String(value)}
              </span>
            ))}
          </div>
        )}

        {/* CTA buttons */}
        <div className="space-y-2">
          <button
            onClick={() => setSelectedProduct(product)}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg text-sm px-4 py-2.5 text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 transition-colors shadow"
          >
            <FaInfoCircle />
            Details
          </button>
          
          {/* Brochure download button */}
          {product.hasBrochure && product.brochureBase64Data && (
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = product.brochureBase64Data;
                link.download = product.brochureFileName || 'brochure';
                link.click();
              }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg text-sm px-4 py-2.5 text-teal-600 bg-teal-50 hover:bg-teal-100 border border-teal-200 hover:border-teal-300 transition-colors"
            >
              <FaDownload />
              Download Brochure
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );

  const ProductModal = ({ product, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="w-full h-64 rounded-lg mb-4 overflow-hidden">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Product Image</span>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">SKU:</span>
                  <span>{product.sku}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Category:</span>
                  <span>{product.category}</span>
                </div>
                {product.subcategory && (
                  <div className="flex justify-between">
                    <span className="font-semibold">Subcategory:</span>
                    <span>{product.subcategory}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
            </div>
          </div>
          
          
        </div>
      </motion.div>
    </motion.div>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding pt-20 md:pt-24 lg:pt-28">
        <div className="container-max text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Product Catalogue</h1>
            <p className="text-xl text-light-teal max-w-3xl mx-auto">
              Explore our comprehensive range of medical equipment and pharmaceutical products, 
              all meeting the highest quality and compliance standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white py-8 sticky top-14 md:top-16 lg:top-16 z-30 shadow-sm">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-prime focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <FaFilter className="text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => {
                  console.log('Dropdown changed to:', e.target.value);
                  setSelectedCategory(e.target.value);
                }}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-prime focus:border-transparent"
              >
                {allCategories.map((category) => (
                  <React.Fragment key={category.name}>
                    <option value={category.value}>{category.name}</option>
                    {category.subcategories && category.subcategories.map((sub) => (
                      <option key={sub.value} value={sub.value}>
                        &nbsp;&nbsp;&nbsp;&nbsp;↳ {sub.name}
                      </option>
                    ))}
                  </React.Fragment>
                ))}
              </select>
            </div>

            {/* Brand filter removed */}

            <div className="text-gray-600">
              {filteredProducts.length} products found
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-light-gray">
        <div className="container-max">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No products found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id || index} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>


      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </motion.div>
  );
};

export default Products;