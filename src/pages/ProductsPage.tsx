import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductGrid from '../components/ui/ProductGrid';
import { getAllCategories, getProductsByCategory, Product } from '../data/productsData';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...getAllCategories()];
  const allProducts = getProductsByCategory('All');
  
  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : getProductsByCategory(selectedCategory);

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
            <h1 className="text-4xl md:text-6xl font-bebas mb-4 md:mb-6">Our Products</h1>
            <p className="text-base md:text-lg text-rb-gray-300">
              Browse our complete range of custom sportswear and team apparel
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 bg-rb-gray-900 border-b border-rb-gray-800">
        <div className="container-custom">
          {/* Desktop: Filter Pills */}
          <div className="hidden md:flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border-2 font-bebas tracking-wide transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-rb-red text-rb-white border-rb-red'
                    : 'border-rb-gray-700 text-rb-gray-300 hover:border-rb-white hover:text-rb-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Mobile: Dropdown */}
          <div className="md:hidden flex items-center justify-end gap-4">
            <Filter size={20} className="text-rb-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-rb-gray-800 text-rb-white border border-rb-gray-700 rounded-md px-4 py-2 focus:border-rb-red focus:outline-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'All' ? 'All Products' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

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
            <h2 className="text-4xl font-bebas mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-rb-gray-300 mb-8">
              Get in touch with our team to discuss custom designs and special requirements
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;