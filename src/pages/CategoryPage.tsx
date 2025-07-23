import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductGrid from '../components/ui/ProductGrid';
import { getProductsByCategory } from '../data/productsData';

const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const location = useLocation();
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');

  // Map URL slugs to category names
  const categoryMap: { [key: string]: string } = {
    'school-team-sports': 'School & Team Sports',
    'other-sports-clubs': 'Other Sports & Clubs', 
    'schoolwear-matric': 'Schoolwear & Matric Apparel',
    'corporate-staff': 'Corporate & Staff Apparel',
    'gym-fitness': 'Gym & Fitness Apparel',
    'accessories-branding': 'Accessories & Branding'
  };

  const categoryName = categoryMap[categorySlug || ''] || '';
  const products = getProductsByCategory(categoryName);
  const subcategories = ['All', ...new Set(products.map(p => p.subcategory).filter(Boolean))];
  
  const filteredProducts = selectedSubcategory === 'All' 
    ? products 
    : products.filter(p => p.subcategory === selectedSubcategory);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  if (!categoryName) {
    return (
      <div className="pt-32 pb-16 bg-rb-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bebas text-rb-white mb-4">Category Not Found</h1>
          <Button to="/products" variant="primary">
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-rb-black texture-overlay relative">
        <div className="absolute inset-0 bg-gradient-to-b from-rb-black to-transparent opacity-80"></div>
        
        <div className="container-custom relative z-10 px-4 md:px-8 lg:px-16">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bebas mb-4 md:mb-6">{categoryName}</h1>
            <p className="text-base md:text-lg text-rb-gray-300">
              Browse our complete range of {categoryName.toLowerCase()} products
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      {subcategories.length > 1 && (
        <section className="py-6 bg-rb-gray-900 border-b border-rb-gray-800">
          <div className="container-custom">
            {/* Desktop: Filter Pills */}
            <div className="hidden md:flex flex-wrap justify-center gap-4">
              {subcategories.map((subcategory, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSubcategory(subcategory)}
                  className={`px-6 py-2 rounded-full border-2 font-bebas tracking-wide transition-all duration-300 ${
                    selectedSubcategory === subcategory
                      ? 'bg-rb-red text-rb-white border-rb-red'
                      : 'border-rb-gray-700 text-rb-gray-300 hover:border-rb-white hover:text-rb-white'
                  }`}
                >
                  {subcategory === 'All' ? 'All Subcategories' : subcategory}
                </button>
              ))}
            </div>
            
            {/* Mobile: Dropdown */}
            <div className="md:hidden flex items-center justify-end gap-4">
              <Filter size={20} className="text-rb-gray-400" />
              <select
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                className="bg-rb-gray-800 text-rb-white border border-rb-gray-700 rounded-md px-4 py-2 focus:border-rb-red focus:outline-none"
              >
                {subcategories.map(subcategory => (
                  <option key={subcategory} value={subcategory}>
                    {subcategory === 'All' ? 'All Subcategories' : subcategory}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-12 bg-rb-gray-900">
        <div className="container-custom">
          <ProductGrid products={filteredProducts} showViewToggle={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rb-black">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bebas mb-6">Ready to Order Your {categoryName}?</h2>
            <p className="text-rb-gray-300 mb-8">
              Get in touch with our team for custom designs and bulk orders
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Get a Quote
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CategoryPage;