export interface Product {
  title: string;
  image: string;
  category: string;
  path: string;
  subcategory?: string;
}

const allProducts: Product[] = [
  // Rugby Products
  {
    title: 'Rugby Jerseys',
    image: '/sublimated-card.jpg',
    category: 'Rugby',
    subcategory: 'Jerseys',
    path: '/products/rugby-kits/jerseys'
  },
  {
    title: 'Rugby Shorts',
    image: '/shorts-card.jpg',
    category: 'Rugby',
    subcategory: 'Shorts',
    path: '/products/rugby-kits/shorts'
  },
  {
    title: 'Full Rugby Kit',
    image: '/full-kit-card.jpg',
    category: 'Rugby',
    subcategory: 'Full Kit',
    path: '/products/rugby-kits/full-kit'
  },
  
  // Netball Products
  {
    title: 'Netball Dresses',
    image: 'https://images.pexels.com/photos/8007513/pexels-photo-8007513.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Netball',
    subcategory: 'Dresses',
    path: '/products/netball-kits/dress'
  },
  {
    title: 'Netball Skirts',
    image: 'https://images.pexels.com/photos/8007514/pexels-photo-8007514.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Netball',
    subcategory: 'Skirts',
    path: '/products/netball-kits/skirts'
  },
  {
    title: 'Full Netball Kit',
    image: 'https://images.pexels.com/photos/8007513/pexels-photo-8007513.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Netball',
    subcategory: 'Full Kit',
    path: '/products/netball-kits/full-kit'
  },
  
  // Hockey Products
  {
    title: 'Hockey Jerseys',
    image: 'https://images.pexels.com/photos/163452/hockey-ice-hockey-sport-163452.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Hockey',
    subcategory: 'Jerseys',
    path: '/products/hockey-kits/jerseys'
  },
  {
    title: 'Hockey Shorts',
    image: 'https://images.pexels.com/photos/163452/hockey-ice-hockey-sport-163452.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Hockey',
    subcategory: 'Shorts',
    path: '/products/hockey-kits/shorts'
  },
  {
    title: 'Full Hockey Kit',
    image: 'https://images.pexels.com/photos/163452/hockey-ice-hockey-sport-163452.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Hockey',
    subcategory: 'Full Kit',
    path: '/products/hockey-kits/full-kit'
  },
  
  // Soccer Products
  {
    title: 'Soccer Jerseys',
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Soccer',
    subcategory: 'Jerseys',
    path: '/products/soccer-kits/jerseys'
  },
  {
    title: 'Soccer Shorts',
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg',
    category: 'Soccer',
    subcategory: 'Shorts',
    path: '/products/soccer-kits/shorts'
  },
  {
    title: 'Full Soccer Kit',
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Soccer',
    subcategory: 'Full Kit',
    path: '/products/soccer-kits/full-kit'
  },
  
  // Cricket Products
  {
    title: 'Cricket Whites',
    image: 'https://images.pexels.com/photos/8007516/pexels-photo-8007516.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Cricket',
    subcategory: 'Whites',
    path: '/products/cricket-kits/whites'
  },
  {
    title: 'Cricket Training Kit',
    image: 'https://images.pexels.com/photos/8007516/pexels-photo-8007516.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Cricket',
    subcategory: 'Training',
    path: '/products/cricket-kits/training'
  },
  {
    title: 'Full Cricket Kit',
    image: 'https://images.pexels.com/photos/8007516/pexels-photo-8007516.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Cricket',
    subcategory: 'Full Kit',
    path: '/products/cricket-kits/full-kit'
  },
  
  // Athletics Products
  {
    title: 'Track & Field Uniforms',
    image: 'https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Athletics',
    subcategory: 'Track & Field',
    path: '/products/athletics-kits'
  },
  {
    title: 'Running Vests',
    image: 'https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Athletics',
    subcategory: 'Running',
    path: '/products/athletics-kits'
  },
  
  // Matric Jackets
  {
    title: 'Standard Matric Jacket',
    image: 'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Matric Jackets',
    subcategory: 'Standard',
    path: '/products/matric-jackets/standard'
  },
  {
    title: 'Premium Matric Jacket',
    image: 'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Matric Jackets',
    subcategory: 'Premium',
    path: '/products/matric-jackets/premium'
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All') {
    return allProducts;
  }
  return allProducts.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.path.includes(id));
};

export const getAllCategories = (): string[] => {
  return [...new Set(allProducts.map(product => product.category))];
};