import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter } from 'lucide-react';
import Button from '../ui/Button';
import ProductGrid from '../ui/ProductGrid';
import { Product } from '../../data/productsData';

interface SubcategoryTemplateProps {
  title: string;
  description: string;
  products: Product[];
  showFilter?: boolean;
}

const SubcategoryTemplate: React.FC<SubcategoryTemplateProps> = ({ 
  title, 
  description, 
  products,
  showFilter = true
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = showFilter ? ['All', ...new Set(products.map(p => p.category).filter(Boolean))] : [];
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-rb-black texture-overlay relative">
        <div className="absolute inset-0 bg-gradient-to-b from-rb-black to-transparent opacity-80"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bebas mb-6">{title}</h1>
            <p className="text-lg text-rb-gray-300">{description}</p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      {showFilter && categories.length > 1 && (
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
                  {category === 'All' ? 'All Categories' : category}
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
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>
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

      {/* CTA */}
      <section className="py-20 bg-rb-black">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bebas mb-6">Ready to Order Your {title}?</h2>
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

export default SubcategoryTemplate;