export interface Product {
  title: string;
  imageCarousel: string[];
  category: string;
  subcategory: string;
  path: string;
  description?: string;
}

const allProducts: Product[] = [
  // School & Team Sports - Rugby
  {
    title: 'Rugby Jersey',
    imageCarousel: ['/rugby-jersey-frontback.png'],
    category: 'School & Team Sports',
    subcategory: 'Rugby',
    path: '/products/rugby-jerseys'
  },
  {
    title: 'Rugby Shorts',
    imageCarousel: ['/rugby-shorts-frontback.png'],
    category: 'School & Team Sports',
    subcategory: 'Rugby',
    path: '/products/rugby-shorts'
  },
  {
    title: 'Rugby Socks',
    imageCarousel: ['/tab-socks.png'],
    category: 'School & Team Sports',
    subcategory: 'Rugby',
    path: '/products/rugby-socks'
  },
  {
    title: 'Short Sleeve Warm-Up',
    imageCarousel: ['/long-sleeve-warm-up-frontback.png'],
    category: 'School & Team Sports',
    subcategory: 'Rugby',
    path: '/products/rugby-warmup-short'
  },
  {
    title: 'Long Sleeve Warm-Up',
    imageCarousel: ['/long-sleeve-warm-up-frontback.png'],
    category: 'School & Team Sports',
    subcategory: 'Rugby',
    path: '/products/rugby-warmup-long'
  },

  // School & Team Sports - Netball
  {
    title: 'Netball Dress',
    imageCarousel: ['/netball-dress-frontback.png'],
    category: 'School & Team Sports',
    subcategory: 'Netball',
    path: '/products/netball-dress'
  },
  {
    title: 'Hot Pants',
    imageCarousel: ['/compression-shorts-frontback.png'],
    category: 'School & Team Sports',
    subcategory: 'Netball',
    path: '/products/netball-hotpants'
  },
  {
    title: 'Netball Socks',
    imageCarousel: ['/tab-socks.png'],
    category: 'School & Team Sports',
    subcategory: 'Netball',
    path: '/products/netball-socks'
  },
  {
    title: 'Bibs',
    imageCarousel: ['/bibs.png'],
    category: 'School & Team Sports',
    subcategory: 'Netball',
    path: '/products/netball-bibs'
  },
  {
    title: 'Skort',
    imageCarousel: ['/skort-frontback.png'],
    category: 'School & Team Sports',
    subcategory: 'Netball',
    path: '/products/netball-skort'
  },
  {
    title: 'Ladies Vest',
    imageCarousel: ['/netball-dress-frontback.png'],
    category: 'School & Team Sports',
    subcategory: 'Netball',
    path: '/products/netball-vest-ladies'
  },

  // School & Team Sports - Cricket
  {
    title: 'Cricket Shirt',
    imageCarousel: ['/rugby-jersey-frontback.png'],
    category: 'School & Team Sports',
    subcategory: 'Cricket',
    path: '/products/cricket-shirt'
  },
  {
    title: 'Cricket Pants',
    imageCarousel: ['/rugby-shorts-frontback.png'],
    category: 'School & Team Sports',
    subcategory: 'Cricket',
    path: '/products/cricket-pants'
  },

  // School & Team Sports - Hockey
  {
    title: 'Hockey Dress',
    imageCarousel: ['/netball-dress-frontback.png'],
    category: 'School & Team Sports',
    subcategory: 'Hockey',
    path: '/products/hockey-dress'
  },
  {
    title: 'Hockey Shorts',
    imageCarousel: ['/hockey-shorts-frontback.png'],
    category: 'School & Team Sports',
    subcategory: 'Hockey',
    path: '/products/hockey-shorts'
  },
  {
    title: 'Hockey Socks',
    imageCarousel: ['/tab-socks.png'],
    category: 'School & Team Sports',
    subcategory: 'Hockey',
    path: '/products/hockey-socks'
  },
  {
    title: 'Hockey Shirt',
    imageCarousel: ['/rugby-jersey-frontback.png'],
    category: 'School & Team Sports',
    subcategory: 'Hockey',
    path: '/products/hockey-shirt'
  },

  // School & Team Sports - Athletics
  {
    title: 'Athletics Shorts',
    imageCarousel: ['/gym-shorts-frontback.png'],
    category: 'School & Team Sports',
    subcategory: 'Athletics',
    path: '/products/athletics-shorts'
  },

  // Other Sports & Clubs - Soccer
  {
    title: 'Soccer Jersey',
    imageCarousel: ['/soccer-jersey-frontback.png'],
    category: 'Other Sports & Clubs',
    subcategory: 'Soccer',
    path: '/products/soccer-jersey'
  },
  {
    title: 'Soccer Shorts',
    imageCarousel: ['/gym-shorts-frontback.png'],
    category: 'Other Sports & Clubs',
    subcategory: 'Soccer',
    path: '/products/soccer-shorts'
  },
  {
    title: 'Soccer Socks',
    imageCarousel: ['/tab-socks.png'],
    category: 'Other Sports & Clubs',
    subcategory: 'Soccer',
    path: '/products/soccer-socks'
  },

  // Other Sports & Clubs - Golf
  {
    title: 'Golf Shirt',
    imageCarousel: ['/rugby-jersey-frontback.png'],
    category: 'Other Sports & Clubs',
    subcategory: 'Golf',
    path: '/products/golf-shirt'
  },
  {
    title: 'Golf Dress',
    imageCarousel: ['/netball-dress-frontback.png'],
    category: 'Other Sports & Clubs',
    subcategory: 'Golf',
    path: '/products/golf-dress'
  },
  {
    title: 'Golf Zip Top',
    imageCarousel: ['/hoodie-gym-frontback.png'],
    category: 'Other Sports & Clubs',
    subcategory: 'Golf',
    path: '/products/golf-zip-top'
  },

  // Other Sports & Clubs - Cycling
  {
    title: 'Cycling Shirt',
    imageCarousel: ['/rugby-jersey-frontback.png'],
    category: 'Other Sports & Clubs',
    subcategory: 'Cycling',
    path: '/products/cycling-shirt'
  },

  // Other Sports & Clubs - Fishing
  {
    title: 'Fishing Hoodie',
    imageCarousel: ['/hoodie-gym-frontback.png'],
    category: 'Other Sports & Clubs',
    subcategory: 'Fishing',
    path: '/products/fishing-hoodie'
  },
  {
    title: 'Fishing Tee Long Sleeve',
    imageCarousel: ['/long-sleeve-warm-up-frontback.png'],
    category: 'Other Sports & Clubs',
    subcategory: 'Fishing',
    path: '/products/fishing-tee-long'
  },
  {
    title: 'Fishing Tee Short Sleeve',
    imageCarousel: ['/rugby-jersey-frontback.png'],
    category: 'Other Sports & Clubs',
    subcategory: 'Fishing',
    path: '/products/fishing-tee-short'
  },
  {
    title: 'Fishing Zip Top',
    imageCarousel: ['/hoodie-gym-frontback.png'],
    category: 'Other Sports & Clubs',
    subcategory: 'Fishing',
    path: '/products/fishing-zip-top'
  },

  // Other Sports & Clubs - Hunting
  {
    title: 'Hunting Hoodie',
    imageCarousel: ['/hoodie-gym-frontback.png'],
    category: 'Other Sports & Clubs',
    subcategory: 'Hunting',
    path: '/products/hunting-hoodie'
  },
  {
    title: 'Hunting Puffer Long',
    imageCarousel: ['/puffer-jacket-frontback.png'],
    category: 'Other Sports & Clubs',
    subcategory: 'Hunting',
    path: '/products/hunting-puffer-long'
  },
  {
    title: 'Hunting Puffer Short',
    imageCarousel: ['/corporate-puffer-short-frontback.png'],
    category: 'Other Sports & Clubs',
    subcategory: 'Hunting',
    path: '/products/hunting-puffer-short'
  },
  {
    title: 'Hunting Zip Top',
    imageCarousel: ['/hoodie-gym-frontback.png'],
    category: 'Other Sports & Clubs',
    subcategory: 'Hunting',
    path: '/products/hunting-zip-top'
  },
  {
    title: 'Hunting Softshell Jacket',
    imageCarousel: ['/school-softshell-frontback.png'],
    category: 'Other Sports & Clubs',
    subcategory: 'Hunting',
    path: '/products/hunting-softshell'
  },

  // Other Sports & Clubs - Darts
  {
    title: 'Darts Shirts',
    imageCarousel: ['/rugby-jersey-frontback.png'],
    category: 'Other Sports & Clubs',
    subcategory: 'Darts',
    path: '/products/darts-shirts'
  },

  // Schoolwear & Apparel - Tracksuits & Hoodies
  {
    title: 'School Hoodie',
    imageCarousel: ['/hoodie-gym-frontback.png'],
    category: 'Schoolwear & Apparel',
    subcategory: 'Tracksuits & Hoodies',
    path: '/products/school-hoodie'
  },
  {
    title: 'School Tracksuit Pants',
    imageCarousel: ['/leggings-frontback.png'],
    category: 'Schoolwear & Apparel',
    subcategory: 'Tracksuits & Hoodies',
    path: '/products/school-tracksuit-pants'
  },
  {
    title: 'Tracksuits',
    imageCarousel: ['/hoodie-gym-frontback.png'],
    category: 'Schoolwear & Apparel',
    subcategory: 'Tracksuits & Hoodies',
    path: '/products/tracksuits'
  },

  // Schoolwear & Apparel - T-Shirts & Golfers
  {
    title: 'School Short Sleeve T-Shirt',
    imageCarousel: ['/rugby-jersey-frontback.png'],
    category: 'Schoolwear & Apparel',
    subcategory: 'T-Shirts & Golfers',
    path: '/products/school-tshirt-short'
  },
  {
    title: 'School Long Sleeve T-Shirt',
    imageCarousel: ['/long-sleeve-warm-up-frontback.png'],
    category: 'Schoolwear & Apparel',
    subcategory: 'T-Shirts & Golfers',
    path: '/products/school-tshirt-long'
  },
  {
    title: 'School Short Sleeve Golfer',
    imageCarousel: ['/rugby-jersey-frontback.png'],
    category: 'Schoolwear & Apparel',
    subcategory: 'T-Shirts & Golfers',
    path: '/products/school-golfer-short'
  },
  {
    title: 'School Long Sleeve Golfer',
    imageCarousel: ['/long-sleeve-warm-up-frontback.png'],
    category: 'Schoolwear & Apparel',
    subcategory: 'T-Shirts & Golfers',
    path: '/products/school-golfer-long'
  },

  // Schoolwear & Apparel - Jackets
  {
    title: 'School Softshell Jacket',
    imageCarousel: ['/school-softshell-frontback.png'],
    category: 'Schoolwear & Apparel',
    subcategory: 'Jackets',
    path: '/products/school-softshell'
  },
  {
    title: 'School Puffer Jacket',
    imageCarousel: ['/puffer-jacket-frontback.png'],
    category: 'Schoolwear & Apparel',
    subcategory: 'Jackets',
    path: '/products/school-puffer'
  },

  // Gym & Fitness Apparel - Fitness Gear
  {
    title: 'Leggings',
    imageCarousel: ['/leggings-frontback.png'],
    category: 'Gym & Fitness Apparel',
    subcategory: 'Fitness Gear',
    path: '/products/leggings'
  },
  {
    title: 'Gym Shirt',
    imageCarousel: ['/rugby-jersey-frontback.png'],
    category: 'Gym & Fitness Apparel',
    subcategory: 'Fitness Gear',
    path: '/products/gym-shirt'
  },
  {
    title: 'Gym Vest',
    imageCarousel: ['/netball-dress-frontback.png'],
    category: 'Gym & Fitness Apparel',
    subcategory: 'Fitness Gear',
    path: '/products/gym-vest'
  },
  {
    title: 'Gym Crop Top',
    imageCarousel: ['/netball-dress-frontback.png'],
    category: 'Gym & Fitness Apparel',
    subcategory: 'Fitness Gear',
    path: '/products/gym-crop-top'
  },
  {
    title: 'Long Sleeve Gym T-Shirt',
    imageCarousel: ['/long-sleeve-warm-up-frontback.png'],
    category: 'Gym & Fitness Apparel',
    subcategory: 'Fitness Gear',
    path: '/products/gym-tshirt-long'
  },
  {
    title: 'Gym Shorts',
    imageCarousel: ['/gym-shorts-frontback.png'],
    category: 'Gym & Fitness Apparel',
    subcategory: 'Fitness Gear',
    path: '/products/gym-shorts'
  },

  // Accessories & Branding - Socks
  {
    title: 'Tab Socks',
    imageCarousel: ['/tab-socks.png'],
    category: 'Accessories & Branding',
    subcategory: 'Socks',
    path: '/products/tab-socks'
  },
  {
    title: 'Anklet Socks',
    imageCarousel: ['/anklet-socks.png'],
    category: 'Accessories & Branding',
    subcategory: 'Socks',
    path: '/products/anklet-socks'
  },
  {
    title: 'Premium Crew Socks',
    imageCarousel: ['/tab-socks.png'],
    category: 'Accessories & Branding',
    subcategory: 'Socks',
    path: '/products/premium-crew-socks'
  },
  {
    title: 'Ribbed Crew Socks',
    imageCarousel: ['/tab-socks.png'],
    category: 'Accessories & Branding',
    subcategory: 'Socks',
    path: '/products/ribbed-crew-socks'
  },
  {
    title: 'Promo Crew Socks',
    imageCarousel: ['/tab-socks.png'],
    category: 'Accessories & Branding',
    subcategory: 'Socks',
    path: '/products/promo-crew-socks'
  },
  {
    title: 'Knee High Socks',
    imageCarousel: ['/tab-socks.png'],
    category: 'Accessories & Branding',
    subcategory: 'Socks',
    path: '/products/knee-high-socks'
  },

  // Accessories & Branding - Sleeves & Accessories
  {
    title: 'Sweatbands',
    imageCarousel: ['/tab-socks.png'],
    category: 'Accessories & Branding',
    subcategory: 'Sleeves & Accessories',
    path: '/products/sweatbands'
  },
  {
    title: 'Arm Sleeves',
    imageCarousel: ['/tab-socks.png'],
    category: 'Accessories & Branding',
    subcategory: 'Sleeves & Accessories',
    path: '/products/arm-sleeves'
  },
  {
    title: 'Leg Sleeves',
    imageCarousel: ['/tab-socks.png'],
    category: 'Accessories & Branding',
    subcategory: 'Sleeves & Accessories',
    path: '/products/leg-sleeves'
  },

  // Accessories & Branding - Headwear
  {
    title: 'Cap',
    imageCarousel: ['/cap-frontback.png'],
    category: 'Accessories & Branding',
    subcategory: 'Headwear',
    path: '/products/cap'
  },
  {
    title: 'Visor Cap',
    imageCarousel: ['/visor-cap-frontback.png'],
    category: 'Accessories & Branding',
    subcategory: 'Headwear',
    path: '/products/visor-cap'
  },

  // Accessories & Branding - Bags
  {
    title: 'Backpack',
    imageCarousel: ['/backpack-frontback.png'],
    category: 'Accessories & Branding',
    subcategory: 'Bags',
    path: '/products/backpack'
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All') {
    return allProducts;
  }
  return allProducts.filter(product => product.category === category);
};

export const getProductsBySubcategory = (subcategory: string): Product[] => {
  if (!subcategory) return [];
  
  // Use exact match for subcategory - this is the proven approach
  return allProducts.filter(product => product.subcategory === subcategory);
};

export const getProductsBySubcategoryAndCategory = (subcategory: string, category?: string): Product[] => {
  if (!subcategory) return [];
  
  let products: Product[] = [];
  
  // Method 1: Exact subcategory match
  products = allProducts.filter(product => product.subcategory === subcategory);
  
  // Method 2: If category provided, filter by both
  if (products.length === 0 && category) {
    products = allProducts.filter(product => 
      product.category === category && product.subcategory === subcategory
    );
  }
  
  // Method 3: Case-insensitive subcategory match
  if (products.length === 0) {
    products = allProducts.filter(product => 
      product.subcategory?.toLowerCase() === subcategory.toLowerCase()
    );
  }
  
  // Method 4: Partial subcategory match
  if (products.length === 0) {
    products = allProducts.filter(product => 
      product.subcategory?.toLowerCase().includes(subcategory.toLowerCase())
    );
  }
  
  return products;
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.path.includes(id));
};

export const getAllCategories = (): string[] => {
  return [...new Set(allProducts.map(product => product.category))];
};

export const getAllSubcategories = (): string[] => {
  return [...new Set(allProducts.map(product => product.subcategory))];
};

export default allProducts;