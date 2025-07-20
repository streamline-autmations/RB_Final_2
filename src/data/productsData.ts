export interface Product {
  title: string;
  image: string;
  category: string;
  subcategory: string;
  path: string;
  description?: string;
}

const allProducts: Product[] = [
  // School & Team Sports - Rugby
  {
    title: 'Rugby Jersey',
    image: '/rugby-jersey-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Rugby',
    path: '/products/rugby-jerseys'
  },
  {
    title: 'Rugby Shorts',
    image: '/rugby-shorts-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Rugby',
    path: '/products/rugby-shorts'
  },
  {
    title: 'Rugby Socks',
    image: '/rugby-socks.png',
    category: 'School & Team Sports',
    subcategory: 'Rugby',
    path: '/products/rugby-socks'
  },
  {
    title: 'Short Sleeve Warm-Up',
    image: '/short-sleeve-warm-up-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Rugby',
    path: '/products/rugby-warmup-short'
  },
  {
    title: 'Long Sleeve Warm-Up',
    image: '/long-sleeve-warm-up-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Rugby',
    path: '/products/rugby-warmup-long'
  },

  // School & Team Sports - Netball
  {
    title: 'Netball Dress',
    image: '/netball-dress-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Netball',
    path: '/products/netball-dress'
  },
  {
    title: 'Hot Pants',
    image: '/hot-pants-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Netball',
    path: '/products/netball-hotpants'
  },
  {
    title: 'Netball Socks',
    image: '/netball-socks.png',
    category: 'School & Team Sports',
    subcategory: 'Netball',
    path: '/products/netball-socks'
  },
  {
    title: 'Bibs',
    image: '/netball-bibs.png',
    category: 'School & Team Sports',
    subcategory: 'Netball',
    path: '/products/netball-bibs'
  },
  {
    title: 'Skort',
    image: '/skort-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Netball',
    path: '/products/netball-skort'
  },
  {
    title: 'Ladies Vest',
    image: '/ladies-vest-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Netball',
    path: '/products/netball-vest-ladies'
  },

  // School & Team Sports - Cricket
  {
    title: 'Cricket Shirt',
    image: '/cricket-shirt-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Cricket',
    path: '/products/cricket-shirt'
  },
  {
    title: 'Cricket Pants',
    image: '/cricket-pants-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Cricket',
    path: '/products/cricket-pants'
  },
  {
    title: 'Long Sleeve Golfer',
    image: '/long-sleeve-golfer-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Cricket',
    path: '/products/cricket-golfer-long'
  },

  // School & Team Sports - Hockey
  {
    title: 'Hockey Dress',
    image: '/hockey-dress-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Hockey',
    path: '/products/hockey-dress'
  },
  {
    title: 'Hockey Shorts',
    image: '/hockey-shorts-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Hockey',
    path: '/products/hockey-shorts'
  },
  {
    title: 'Hockey Socks',
    image: '/hockey-socks.png',
    category: 'School & Team Sports',
    subcategory: 'Hockey',
    path: '/products/hockey-socks'
  },
  {
    title: 'Short Sleeve T-Shirt',
    image: '/short-sleeve-t-shirt-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Hockey',
    path: '/products/hockey-tshirt-short'
  },
  {
    title: 'Long Sleeve T-Shirt',
    image: '/long-sleeve-t-shirt-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Hockey',
    path: '/products/hockey-tshirt-long'
  },
  {
    title: 'Men\'s Vest',
    image: '/mens-vest-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Hockey',
    path: '/products/hockey-vest-mens'
  },
  {
    title: 'Ladies Vest',
    image: '/hockey-ladies-vest-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Hockey',
    path: '/products/hockey-vest-ladies'
  },

  // School & Team Sports - Athletics
  {
    title: 'Short Sleeve T-Shirt',
    image: '/athletics-short-sleeve-t-shirt-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Athletics',
    path: '/products/athletics-tshirt-short'
  },
  {
    title: 'Long Sleeve T-Shirt',
    image: '/athletics-long-sleeve-t-shirt-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Athletics',
    path: '/products/athletics-tshirt-long'
  },
  {
    title: 'Crop Top',
    image: '/crop-top-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Athletics',
    path: '/products/athletics-crop-top'
  },
  {
    title: 'Men\'s Vest',
    image: '/athletics-mens-vest-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Athletics',
    path: '/products/athletics-vest-mens'
  },
  {
    title: 'Ladies Vest',
    image: '/athletics-ladies-vest-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Athletics',
    path: '/products/athletics-vest-ladies'
  },
  {
    title: 'Shorts',
    image: '/athletics-shorts-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Athletics',
    path: '/products/athletics-shorts'
  },
  {
    title: 'Leggings',
    image: '/athletics-leggings-frontback.png',
    category: 'School & Team Sports',
    subcategory: 'Athletics',
    path: '/products/athletics-leggings'
  },

  // Other Sports & Clubs - Soccer
  {
    title: 'Soccer Shirt',
    image: '/soccer-jersey-frontback.png',
    category: 'Other Sports & Clubs',
    subcategory: 'Soccer',
    path: '/products/soccer-jersey'
  },
  {
    title: 'Soccer Shorts',
    image: '/soccer-shorts-frontback.png',
    category: 'Other Sports & Clubs',
    subcategory: 'Soccer',
    path: '/products/soccer-shorts'
  },
  {
    title: 'Soccer Socks',
    image: '/soccer-socks.png',
    category: 'Other Sports & Clubs',
    subcategory: 'Soccer',
    path: '/products/soccer-socks'
  },

  // Other Sports & Clubs - Golf
  {
    title: 'Short Sleeve Golfer',
    image: '/golf-shirt-frontback.png',
    category: 'Other Sports & Clubs',
    subcategory: 'Golf',
    path: '/products/golf-shirt'
  },
  {
    title: 'Golf Dress',
    image: '/golf-dress.png',
    category: 'Other Sports & Clubs',
    subcategory: 'Golf',
    path: '/products/golf-dress'
  },
  {
    title: 'Golf Zip Top',
    image: '/golf-zip-top.png',
    category: 'Other Sports & Clubs',
    subcategory: 'Golf',
    path: '/products/golf-zip-top'
  },

  // Other Sports & Clubs - Fishing
  {
    title: 'Fishing Zip Top',
    image: '/fishing-zip-top.png',
    category: 'Other Sports & Clubs',
    subcategory: 'Fishing',
    path: '/products/fishing-zip-top'
  },
  {
    title: 'Fishing Long Sleeve Hoodie',
    image: '/fishing-hoodie-long.png',
    category: 'Other Sports & Clubs',
    subcategory: 'Fishing',
    path: '/products/fishing-hoodie-long'
  },
  {
    title: 'Fishing Long Sleeve T-Shirt',
    image: '/fishing-tshirt-long.png',
    category: 'Other Sports & Clubs',
    subcategory: 'Fishing',
    path: '/products/fishing-tshirt-long'
  },
  {
    title: 'Fishing Short Sleeve T-Shirt',
    image: '/fishing-tshirt-short.png',
    category: 'Other Sports & Clubs',
    subcategory: 'Fishing',
    path: '/products/fishing-tshirt-short'
  },

  // Other Sports & Clubs - Hunting
  {
    title: 'Hunting Zip Top',
    image: '/hunting-zip-top.png',
    category: 'Other Sports & Clubs',
    subcategory: 'Hunting',
    path: '/products/hunting-zip-top'
  },
  {
    title: 'Short Puffer Jacket',
    image: '/hunting-puffer-short.png',
    category: 'Other Sports & Clubs',
    subcategory: 'Hunting',
    path: '/products/hunting-puffer-short'
  },
  {
    title: 'Long Puffer Jacket',
    image: '/hunting-puffer-long.png',
    category: 'Other Sports & Clubs',
    subcategory: 'Hunting',
    path: '/products/hunting-puffer-long'
  },
  {
    title: 'Hoodie',
    image: '/hunting-hoodie.png',
    category: 'Other Sports & Clubs',
    subcategory: 'Hunting',
    path: '/products/hunting-hoodie'
  },
  {
    title: 'Softshell Jacket',
    image: '/hunting-softshell.png',
    category: 'Other Sports & Clubs',
    subcategory: 'Hunting',
    path: '/products/hunting-softshell'
  },
  {
    title: 'Hunting Puffer Jacket',
    image: '/hunting-puffer-jacket-frontback.png',
    category: 'Other Sports & Clubs',
    subcategory: 'Hunting',
    path: '/products/hunting-puffer-jacket'
  },

  // Schoolwear & Matric Apparel - Matric Jackets
  {
    title: 'Matric Jacket',
    image: '/matric-jacket-frontback.png',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'Matric Jackets',
    path: '/products/matric-jacket'
  },

  // Schoolwear & Matric Apparel - Tracksuits & Hoodies
  {
    title: 'School Hoodie',
    image: '/school-hoodie.png',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'Tracksuits & Hoodies',
    path: '/products/school-hoodie'
  },
  {
    title: 'Tracksuit Pants',
    image: '/school-tracksuit-pants.png',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'Tracksuits & Hoodies',
    path: '/products/school-tracksuit-pants'
  },

  // Schoolwear & Matric Apparel - T-Shirts & Golfers
  {
    title: 'Short Sleeve T-Shirt',
    image: '/school-tshirt-short.png',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'T-Shirts & Golfers',
    path: '/products/school-tshirt-short'
  },
  {
    title: 'Long Sleeve T-Shirt',
    image: '/school-tshirt-long.png',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'T-Shirts & Golfers',
    path: '/products/school-tshirt-long'
  },
  {
    title: 'Short Sleeve Golfer',
    image: '/school-golfer-short.png',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'T-Shirts & Golfers',
    path: '/products/school-golfer-short'
  },
  {
    title: 'Long Sleeve Golfer',
    image: '/school-golfer-long.png',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'T-Shirts & Golfers',
    path: '/products/school-golfer-long'
  },

  // Schoolwear & Matric Apparel - Jackets
  {
    title: 'Softshell Jacket',
    image: '/school-softshell.png',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'Jackets',
    path: '/products/school-softshell'
  },
  {
    title: 'Puffer Jacket',
    image: '/school-puffer.png',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'Jackets',
    path: '/products/school-puffer'
  },

  // Schoolwear & Matric Apparel - Female Apparel
  {
    title: 'Skirts – Junior & Senior',
    image: '/school-skirts.png',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'Female Apparel',
    path: '/products/school-skirts'
  },

  // Corporate & Staff Apparel - Corporate Wear
  {
    title: 'Softshell Jacket',
    image: '/corporate-softshell.png',
    category: 'Corporate & Staff Apparel',
    subcategory: 'Corporate Wear',
    path: '/products/corporate-softshell'
  },
  {
    title: 'Zip Top',
    image: '/corporate-zip-top.png',
    category: 'Corporate & Staff Apparel',
    subcategory: 'Corporate Wear',
    path: '/products/corporate-zip-top'
  },
  {
    title: 'Short Puffer Jacket',
    image: '/corporate-puffer-short.png',
    category: 'Corporate & Staff Apparel',
    subcategory: 'Corporate Wear',
    path: '/products/corporate-puffer-short'
  },
  {
    title: 'Long Puffer Jacket',
    image: '/corporate-puffer-long.png',
    category: 'Corporate & Staff Apparel',
    subcategory: 'Corporate Wear',
    path: '/products/corporate-puffer-long'
  },
  {
    title: 'Short Sleeve Golfer',
    image: '/corporate-shirt-frontback.png',
    category: 'Corporate & Staff Apparel',
    subcategory: 'Corporate Wear',
    path: '/products/corporate-shirt'
  },

  // Gym & Fitness Apparel - Fitness Gear
  {
    title: 'Crop Top',
    image: '/gym-crop-top.png',
    category: 'Gym & Fitness Apparel',
    subcategory: 'Fitness Gear',
    path: '/products/gym-crop-top'
  },
  {
    title: 'Leggings',
    image: '/leggings-frontback.png',
    category: 'Gym & Fitness Apparel',
    subcategory: 'Fitness Gear',
    path: '/products/leggings'
  },
  {
    title: 'Hoodie',
    image: '/gym-hoodie.png',
    category: 'Gym & Fitness Apparel',
    subcategory: 'Fitness Gear',
    path: '/products/gym-hoodie'
  },
  {
    title: 'Tracksuit Pants',
    image: '/gym-tracksuit-pants.png',
    category: 'Gym & Fitness Apparel',
    subcategory: 'Fitness Gear',
    path: '/products/gym-tracksuit-pants'
  },
  {
    title: 'Short Sleeve T-Shirt',
    image: '/gym-shirt-frontback.png',
    category: 'Gym & Fitness Apparel',
    subcategory: 'Fitness Gear',
    path: '/products/gym-shirt'
  },
  {
    title: 'Long Sleeve T-Shirt',
    image: '/gym-tshirt-long.png',
    category: 'Gym & Fitness Apparel',
    subcategory: 'Fitness Gear',
    path: '/products/gym-tshirt-long'
  },

  // Accessories & Branding - Socks
  {
    title: 'Premium Long Socks',
    image: '/tab-socks.png',
    category: 'Accessories & Branding',
    subcategory: 'Socks',
    path: '/products/tab-socks'
  },
  {
    title: 'Premium Short Socks',
    image: '/ankle-socks.png',
    category: 'Accessories & Branding',
    subcategory: 'Socks',
    path: '/products/ankle-socks'
  },
  {
    title: 'Rugby Socks',
    image: '/rugby-socks.png',
    category: 'Accessories & Branding',
    subcategory: 'Socks',
    path: '/products/rugby-socks'
  },
  {
    title: 'Netball Socks',
    image: '/netball-socks.png',
    category: 'Accessories & Branding',
    subcategory: 'Socks',
    path: '/products/netball-socks'
  },
  {
    title: 'Hockey Socks',
    image: '/hockey-socks.png',
    category: 'Accessories & Branding',
    subcategory: 'Socks',
    path: '/products/hockey-socks'
  },
  {
    title: 'Soccer Socks',
    image: '/soccer-socks.png',
    category: 'Accessories & Branding',
    subcategory: 'Socks',
    path: '/products/soccer-socks'
  },

  // Accessories & Branding - Headwear
  {
    title: 'Visor Cap',
    image: '/visor-cap.png',
    category: 'Accessories & Branding',
    subcategory: 'Headwear',
    path: '/products/visor-cap'
  },
  {
    title: 'Cap',
    image: '/cap.png',
    category: 'Accessories & Branding',
    subcategory: 'Headwear',
    path: '/products/cap'
  },

  // Accessories & Branding - Bags
  {
    title: 'Backpack',
    image: '/backpack.png',
    category: 'Accessories & Branding',
    subcategory: 'Bags',
    path: '/products/backpack'
  },

  // Accessories & Branding - Warmup & Training
  {
    title: 'Leg Sleeves',
    image: '/leg-sleeves.png',
    category: 'Accessories & Branding',
    subcategory: 'Warmup & Training',
    path: '/products/leg-sleeves'
  },
  {
    title: 'UV Arm Sleeves',
    image: '/uv-arm-sleeves.png',
    category: 'Accessories & Branding',
    subcategory: 'Warmup & Training',
    path: '/products/uv-arm-sleeves'
  },
  {
    title: 'Sweatbands',
    image: '/sweatbands.png',
    category: 'Accessories & Branding',
    subcategory: 'Warmup & Training',
    path: '/products/sweatbands'
  },
  {
    title: 'Bibs',
    image: '/netball-bibs.png',
    category: 'Accessories & Branding',
    subcategory: 'Warmup & Training',
    path: '/products/netball-bibs'
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All') {
    return allProducts;
  }
  return allProducts.filter(product => product.category === category);
};

export const getProductsBySubcategory = (subcategory: string): Product[] => {
  return allProducts.filter(product => product.subcategory === subcategory);
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