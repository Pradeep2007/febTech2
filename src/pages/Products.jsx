import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaFilter, 
  FaSearch, 
  FaShoppingCart, 
  FaInfoCircle,
  FaCheck,
  FaTimes
} from 'react-icons/fa';
import { getProducts, sampleProducts } from '../services/productService';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, searchTerm, selectedCategory, selectedBrand]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      let productData = await getProducts();
      
      // If no products in Firebase, use sample data
      if (productData.length === 0) {
        productData = sampleProducts;
      }
      
      setProducts(productData);
    } catch (error) {
      console.error('Error loading products:', error);
      // Fallback to sample data
      setProducts(sampleProducts);
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by brand
    if (selectedBrand !== 'All') {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    setFilteredProducts(filtered);
  };

  const categories = ['All', ...new Set(products.map(p => p.category))].filter(Boolean);
  const brands = ['All', ...new Set(products.map(p => p.brand))].filter(Boolean);

  const ProductCard = ({ product }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card p-6"
    >
      <div className="aspect-w-16 aspect-h-12 mb-4">
        <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Product Image</span>
        </div>
      </div>
      
      <div className="mb-2">
        <span className="inline-block bg-teal-prime text-white text-xs px-2 py-1 rounded-full">
          {product.category}
        </span>
        <span className="inline-block bg-blue text-white text-xs px-2 py-1 rounded-full ml-2">
          {product.brand}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
      
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-500">SKU: {product.sku}</span>
        <div className="flex items-center">
          {product.inStock ? (
            <span className="flex items-center text-green-500 text-sm">
              <FaCheck className="mr-1" /> In Stock
            </span>
          ) : (
            <span className="flex items-center text-red-500 text-sm">
              <FaTimes className="mr-1" /> Out of Stock
            </span>
          )}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-teal-prime">
          ${product.price}
        </span>
        <div className="flex space-x-2">
          <button
            onClick={() => setSelectedProduct(product)}
            className="flex items-center bg-blue text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm"
          >
            <FaInfoCircle className="mr-1" />
            Details
          </button>
          <button className="flex items-center bg-orange text-white px-3 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm">
            <FaShoppingCart className="mr-1" />
            Quote
          </button>
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
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-500">Product Image</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">SKU:</span>
                  <span>{product.sku}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Brand:</span>
                  <span>{product.brand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Category:</span>
                  <span>{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Price:</span>
                  <span className="text-2xl font-bold text-teal-prime">${product.price}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              
              <h3 className="text-lg font-semibold mb-3">Specifications</h3>
              <div className="space-y-2">
                {Object.entries(product.specifications || {}).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="font-medium text-gray-600">{key}:</span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-end space-x-4 mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
            <button className="btn-primary">
              Request Quote
            </button>
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
      <section className="gradient-bg text-white section-padding">
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
      <section className="bg-white py-8 sticky top-16 z-30 shadow-sm">
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
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-prime focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Brand Filter */}
            <div>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-prime focus:border-transparent"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

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
