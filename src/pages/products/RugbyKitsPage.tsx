import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import CategoryTemplate from '../../components/shared/CategoryTemplate';

const RugbyKitsPage: React.FC = () => {
  const products = [
    {
      title: 'Sublimated Rugby Jerseys',
      image: '/src/assets/images/sublimated-card.jpg',
      category: 'Jerseys',
      path: '/products/rugby-kits/jerseys'
    },
    {
      title: 'Rugby Shorts',
      image: '/src/assets/images/shorts-card.jpg',
      category: 'Shorts',
      path: '/products/rugby-kits/shorts'
    },
    {
      title: 'Full Rugby Kit',
      image: '/src/assets/images/full-kit-card.jpg',
      category: 'Full Kit',
      path: '/products/rugby-kits/full-kit'
    }
  ];
  
  return (
    <CategoryTemplate
      title="Rugby Kits"
      description="Professional rugby apparel designed for peak performance and durability"
      products={products}
      heroImage="/src/assets/images/category_rugby.jpg"
    />
  );
};

export default RugbyKitsPage;