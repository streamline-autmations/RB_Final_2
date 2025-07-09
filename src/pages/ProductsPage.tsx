import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter } from 'lucide-react';
import Button from '../components/ui/Button';

interface Product {
  title: string;
  image: string;
  category: string;
  path: string;
}

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products: Product[] = [
    // Rugby Products
    {
      title: 'Rugby Jerseys',
      image: '/sublimated-card.jpg',
      category: 'Rugby',
      path: '/products/rugby-kits/jerseys'
    },
    {
      title: 'Rugby Shorts',
      image: '/shorts-card.jpg',
      category: 'Rugby',
      path: '/products/rugby-kits/shorts'
    },
    {
      title: 'Full Rugby Kit',
      image: '/full-kit-card.jpg',
      category: 'Rugby',
      path: '/products/rugby-kits/full-kit'
    },
    
    // Netball Products
    {
      title: 'Netball Dresses',
      image: 'https://images.pexels.com/photos/8007513/pexels-photo-8007513.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Netball',
      path: '/products/netball-kits/dress'
    },
    {
      title: 'Netball Skirts',
      image: 'https://images.pexels.com/photos/8007514/pexels-photo-8007514.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Netball',
      path: '/products/netball-kits/skirts'
    },
    {
      title: 'Full Netball Kit',
      image: 'https://images.pexels.com/photos/8007513/pexels-photo-8007513.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Netball',
      path: '/products/netball-kits/full-kit'
    },
    
    // Hockey Products
    {
      title: 'Hockey Jerseys',
      image: 'https://images.pexels.com/photos/163452/hockey-ice-hockey-sport-163452.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Hockey',
      path: '/products/hockey-kits/jerseys'
    },
    {
      title: 'Hockey Shorts',
      image: 'https://images.pexels.com/photos/163452/hockey-ice-hockey-sport-163452.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Hockey',
      path: '/products/hockey-kits/shorts'
    },
    {
      title: 'Full Hockey Kit',
      image: 'https://images.pexels.com/photos/163452/hockey-ice-hockey-sport-163452.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Hockey',
      path: '/products/hockey-kits/full-kit'
    },
    
    // Soccer Products
    {
      title: 'Soccer Jerseys',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Soccer',
      path: '/products/soccer-kits/jerseys'
    },
    {
      title: 'Soccer Shorts',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Soccer',
      path: '/products/soccer-kits/shorts'
    },
    {
      title: 'Full Soccer Kit',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Soccer',
      path: '/products/soccer-kits/full-kit'
    },
    
    // Cricket Products
    {
      title: 'Cricket Whites',
      image: 'https://images.pexels.com/photos/8007516/pexels-photo-8007516.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Cricket',
      path: '/products/cricket-kits/whites'
    },
    {
      title: 'Cricket Training Kit',
      image: 'https://images.pexels.com/photos/8007516/pexels-photo-8007516.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Cricket',
      path: '/products/cricket-kits/training'
    },
    {
      title: 'Full Cricket Kit',
      image: 'https://images.pexels.com/photos/8007516/pexels-photo-8007516.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Cricket',
      path: '/products/cricket-kits/full-kit'
    },
    
    // Athletics Products
    {
      title: 'Track & Field Uniforms',
      image: 'https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Athletics',
      path: '/products/athletics-kits'
    },
    {
      title: 'Running Vests',
      image: 'https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Athletics',
      path: '/products/athletics-kits'
    },
    
    // Matric Jackets
    {
      title: 'Standard Matric Jacket',
      image: 'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Matric Jackets',
      path: '/products/matric-jackets/standard'
    },
    {
      title: 'Premium Matric Jacket',
      image: 'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Matric Jackets',
      path: '/products/matric-jackets/premium'
    },
    
    // Golf Products
    {
      title: 'Golf Polo Shirts',
      image: 'https://images.pexels.com/photos/6577527/pexels-photo-6577527.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Golf',
      path: '/products/golf-apparel'
    },
    
    // Darts Products
    {
      title: 'Darts Shirts',
      image: 'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Darts',
      path: '/products/darts-shirts'
    },
    
    // Gymwear Products
    {
      title: 'Performance T-Shirts',
      image: 'https://images.pexels.com/photos/4753878/pexels-photo-4753878.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Gymwear',
      path: '/products/gymwear'
    },
    {
      title: 'Gym Hoodies',
      image: 'https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Gymwear',
      path: '/products/gymwear'
    },
    
    // Staff Uniforms
    {
      title: 'Staff Shirts',
      image: 'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Staff Uniforms',
      path: '/products/staff-uniforms'
    },
    
    // Staff Jackets
    {
      title: 'Corporate Jackets',
      image: 'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Staff Jackets',
      path: '/products/staff-jackets'
    },
    
    // Teamwear Sets
    {
      title: 'Team Tracksuits',
      image: 'https://images.pexels.com/photos/9909147/pexels-photo-9909147.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Teamwear Sets',
      path: '/products/teamwear-sets'
    }
  ];

  const categories = ['All', 'Rugby', 'Netball', 'Hockey', 'Soccer', 'Cricket', 'Athletics', 'Matric Jackets', 'Golf', 'Darts', 'Gymwear', 'Staff Uniforms', 'Staff Jackets', 'Teamwear Sets'];
  
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-rb-black texture-overlay relative">
        <div className="absolute inset-0 bg-gradient-to-b from-rb-black to-transparent opacity-80"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bebas mb-6">Our Products</h1>
            <p className="text-lg text-rb-gray-300">
              Browse our complete range of custom sportswear and team apparel
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-rb-gray-900 border-b border-rb-gray-800">
        <div className="container-custom">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-rb-red text-rb-white'
                      : 'bg-rb-gray-800 text-rb-gray-400 hover:text-rb-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-rb-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={product.path}>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${product.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rb-black to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bebas text-rb-white group-hover:text-rb-red transition-colors">
                        {product.title}
                      </h3>
                      <span className="inline-block bg-rb-red px-3 py-1 rounded-sm text-rb-white text-sm mt-2">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
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