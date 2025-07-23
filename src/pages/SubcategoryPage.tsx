import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductGrid from '../components/ui/ProductGrid';
import allProducts from '../data/productsData';

const fromSlug = (slug: string): string => {
  const map: { [key: string]: string } = {
    "t-shirts-and-golfers": "T-Shirts & Golfers",
    "sleeves-accessories": "Sleeves & Accessories",
    "tracksuits-hoodies": "Tracksuits & Hoodies",
    "school-jackets": "Jackets",
    "corporate": "Corporate Wear",
    "fitness": "Fitness Gear",
    "socks": "Socks",
    "bags": "Bags",
    "headwear": "Headwear"
  };
  return map[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
};

const SubcategoryPage: React.FC = () => {
  const { subcategorySlug } = useParams<{ subcategorySlug: string }>();
  const location = useLocation();

  console.log("🔍 subcategorySlug:", subcategorySlug);
  
  const subcategory = fromSlug(subcategorySlug || "");
  console.log("🔄 Converted subcategory:", subcategory);

  const products = allProducts.filter(
    (p) => p.subcategory.trim().toLowerCase() === subcategory.trim().toLowerCase()
  );

  console.log("📦 Found products:", products.length, products.map(p => p.title));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subcategorySlug]);

  if (!subcategorySlug) {
    return (
      <div className="pt-32 pb-16 bg-rb-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bebas text-rb-white mb-4">❌ Subcategory slug is missing from URL</h1>
          <Button to="/products" variant="primary">
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    console.warn("🚫 No products found for:", subcategory);
    return (
      <div className="pt-32 pb-16 bg-rb-black min-h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bebas text-rb-white mb-4">
              ❌ No products found for this subcategory
            </h1>
            <p className="text-rb-gray-400 mb-6">
              We couldn't find any products for "{subcategory}".
            </p>
            <div className="bg-rb-gray-800 p-4 rounded-lg mb-6 text-left">
              <p className="text-rb-gray-300 text-sm">Debug Info:</p>
              <p className="text-rb-gray-400 text-xs">URL Slug: {subcategorySlug}</p>
              <p className="text-rb-gray-400 text-xs">Converted Subcategory: {subcategory}</p>
            </div>
            <div className="space-y-4">
              <Button to="/products" variant="primary">
                Browse All Products
              </Button>
              <Button to="/contact" variant="outline">
                Contact Us for Custom Products
              </Button>
            </div>
          </motion.div>
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
            <h1 className="text-4xl md:text-6xl font-bebas mb-4 md:mb-6">{subcategory} Kits</h1>
            <p className="text-base md:text-lg text-rb-gray-300">
              Professional {subcategory.toLowerCase()} apparel designed for peak performance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-rb-gray-900">
        <div className="container-custom">
          <ProductGrid products={products} showViewToggle={true} />
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
            <h2 className="text-4xl font-bebas mb-6">Ready to Order Your {subcategory}?</h2>
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

export default SubcategoryPage;