import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Grid2X2, LayoutList, Grid3X3 } from 'lucide-react';
import { Product } from '../../data/productsData';

interface ProductGridProps {
  products: Product[];
  showViewToggle?: boolean;
  className?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, showViewToggle = true, className = '' }) => {
  const [viewMode, setViewMode] = useState<'1' | '2' | '3'>('2');

  // Load saved view mode from localStorage
  useEffect(() => {
    const savedView = localStorage.getItem('productGridView') as '1' | '2' | '3';
    if (savedView) {
      setViewMode(savedView);
    } else {
      // Default to 2-column view for all pages
      setViewMode('2');
    }
  }, []);

  // Save view mode to localStorage
  const handleViewChange = (mode: '1' | '2' | '3') => {
    setViewMode(mode);
    localStorage.setItem('productGridView', mode);
  };

  const getGridClasses = () => {
    switch (viewMode) {
      case '1':
        return 'grid-cols-1 gap-4';
      case '2':
        return 'grid-cols-2 gap-3 md:gap-6';
      case '3':
      default:
        return 'grid-cols-3 gap-2 md:gap-4';
    }
  };

  const getCardClasses = () => {
    switch (viewMode) {
      case '1':
        return 'aspect-[4/3]';
      case '2':
        return 'aspect-square';
      case '3':
      default:
        return 'aspect-square';
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* View Toggle */}
      {showViewToggle && (
        <div className="flex justify-center md:justify-end mb-6">
          <div className="flex items-center bg-rb-gray-800 rounded-lg p-1 w-full max-w-xs md:w-auto">
            <button
              onClick={() => handleViewChange('1')}
              className={`flex-1 md:flex-none p-2 rounded transition-colors duration-200 ${
                viewMode === '1' 
                  ? 'bg-rb-red text-rb-white' 
                  : 'text-rb-gray-400 hover:text-rb-white'
              }`}
              title="Full width view"
            >
              <LayoutList size={18} />
            </button>
            <button
              onClick={() => handleViewChange('2')}
              className={`flex-1 md:flex-none p-2 rounded transition-colors duration-200 ${
                viewMode === '2' 
                  ? 'bg-rb-red text-rb-white' 
                  : 'text-rb-gray-400 hover:text-rb-white'
              }`}
              title="Two column view"
            >
              <Grid2X2 size={18} />
            </button>
            <button
              onClick={() => handleViewChange('3')}
              className={`flex-1 md:flex-none p-2 rounded transition-colors duration-200 ${
                viewMode === '3' 
                  ? 'bg-rb-red text-rb-white' 
                  : 'text-rb-gray-400 hover:text-rb-white'
              }`}
              title="Three column view"
            >
              <Grid3X3 size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className={`grid ${getGridClasses()}`}>
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={product.path}>
              <div className={`relative ${getCardClasses()} rounded-lg overflow-hidden mb-4`}>
                <div 
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${product.imageCarousel[0]})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rb-black to-transparent opacity-60"></div>
                <div className={`absolute bottom-0 left-0 right-0 ${
                  viewMode === '3' ? 'p-2 md:p-4' : 'p-4 md:p-6'
                }`}>
                  <h3 className={`font-bebas text-rb-white group-hover:text-rb-red transition-colors ${
                    viewMode === '1' ? 'text-xl md:text-3xl' : 
                    viewMode === '2' ? 'text-lg md:text-2xl' : 
                    'text-sm md:text-lg'
                  }`}>
                    {product.title}
                  </h3>
                  {product.subcategory && (
                    <span className={`inline-block bg-rb-red px-2 py-1 rounded-sm text-rb-white mt-2 ${
                      viewMode === '3' ? 'text-xs' : 'text-xs md:text-sm'
                    }`}>
                      {product.subcategory}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-rb-gray-400">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;