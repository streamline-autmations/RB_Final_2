import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter } from 'lucide-react';
import Button from '../components/ui/Button';
import { getProductsBySubcategory, getAllSubcategories, getProductsByCategory } from '../data/productsData';
import SubcategoryTemplate from '../components/shared/SubcategoryTemplate';

const SubcategoryPage: React.FC = () => {
  const { subcategorySlug } = useParams<{ subcategorySlug: string }>();
  const location = useLocation();

  // Map URL slugs to subcategory names
  const subcategoryMap: { [key: string]: string } = {
    // School & Team Sports
    'rugby': 'Rugby',
    'netball': 'Netball',
    'cricket': 'Cricket',
    'hockey': 'Hockey',
    'athletics': 'Athletics',
    
    // Other Sports & Clubs
    'soccer': 'Soccer',
    'golf': 'Golf',
    'fishing': 'Fishing',
    'hunting': 'Hunting',
    'cycling': 'Cycling',
    'darts': 'Darts',
    
    // Schoolwear & Matric Apparel
    'tracksuits-hoodies': 'Tracksuits & Hoodies',
    'tshirts-golfers': 'T-Shirts & Golfers',
    'school-jackets': 'Jackets',
    
    // Corporate & Staff Apparel
    'corporate': 'Corporate Wear',
    
    // Gym & Fitness Apparel
    'fitness': 'Fitness Gear',
    
    // Accessories & Branding
    'socks': 'Socks',
    'headwear': 'Headwear',
    'bags': 'Bags'
  };

  const subcategoryName = subcategoryMap[subcategorySlug || ''] || '';
  const products = getProductsBySubcategory(subcategoryName);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subcategorySlug]);

  if (!subcategoryName) {
    return (
      <div className="pt-32 pb-16 bg-rb-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bebas text-rb-white mb-4">Subcategory Not Found</h1>
          <Link to="/products" className="text-rb-red hover:text-rb-white">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <SubcategoryTemplate
      title={`${subcategoryName} Products`}
      description={`Browse our complete range of ${subcategoryName.toLowerCase()} products`}
      products={products}
      showFilter={false}
    />
  );
};

export default SubcategoryPage;