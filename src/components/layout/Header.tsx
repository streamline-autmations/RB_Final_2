import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

interface NavItem {
  label: string;
  path?: string;
  children?: {
    section: string;
    items: {
      label: string;
      path: string;
    }[];
  }[];
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    {
      label: 'Products',
      children: [
        {
          section: 'View All',
          items: [
            { label: 'All Products', path: '/products' }
          ]
        },
        {
          section: 'School & Team Sports',
          items: [
            { label: 'Rugby Kits', path: '/products/rugby-kits' },
            { label: 'Netball Kits', path: '/products/netball-kits' },
            { label: 'Cricket Kits', path: '/products/cricket-kits' },
            { label: 'Hockey Kits', path: '/products/hockey-kits' },
            { label: 'Athletics Kits', path: '/products/athletics-kits' },
            { label: 'Matric Jackets', path: '/products/matric-jackets' },
          ],
        },
        {
          section: 'Other Sports & Clubs',
          items: [
            { label: 'Soccer Kits', path: '/products/soccer-kits' },
            { label: 'Golf Apparel', path: '/products/golf-apparel' },
            { label: 'Darts Shirts', path: '/products/darts-shirts' },
            { label: 'Gymwear', path: '/products/gymwear' },
          ],
        },
        {
          section: 'Corporate & Custom Apparel',
          items: [
            { label: 'Staff Uniforms', path: '/products/staff-uniforms' },
            { label: 'Staff Jackets', path: '/products/staff-jackets' },
            { label: 'Teamwear Sets', path: '/products/teamwear-sets' },
          ],
        },
        {
          section: 'Accessories',
          items: [
            { label: 'Long Socks', path: '/contact' },
            { label: 'Short Socks', path: '/contact' },
            { label: 'Tog Bags', path: '/contact' },
            { label: 'Backpacks', path: '/contact' },
            { label: 'Caps', path: '/contact' },
            { label: 'Bucket Hats', path: '/contact' },
          ],
        },
      ],
    },
    {
      label: 'Catalogues',
      children: [
        {
          section: 'Sport Specific',
          items: [
            { label: 'Athletic Apparel', path: '/catalogues/athletic' },
            { label: 'Matric Apparel', path: '/catalogues/matric' },
            { label: 'Netball Apparel', path: '/catalogues/netball' },
            { label: 'Rugby Apparel', path: '/catalogues/rugby' },
            { label: 'Soccer Apparel', path: '/catalogues/soccer' },
            { label: 'Sailing Apparel', path: '/catalogues/sailing' },
            { label: 'Tennis Apparel', path: '/catalogues/tennis' },
          ],
        },
      ],
    },
    { label: 'Track Order', path: '/track-order' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setExpandedSections([]);
    setIsProductsOpen(false);
  }, [location]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // If we're on the homepage, scroll to top
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // If we're on another page, navigate to homepage
      window.location.href = '/';
    }
  };

  const DropdownMenu: React.FC<{ item: NavItem }> = ({ item }) => {
    if (!item.children) return null;

    return (
      <div className={`${item.label === 'Products' ? (isProductsOpen ? 'block' : 'hidden') : 'group-hover:block hidden'} absolute top-full left-0 pt-2`}>
        <div className="bg-rb-gray-900 rounded-lg shadow-xl border border-rb-gray-800 max-h-[calc(100vh-200px)] overflow-y-auto w-80">
          {item.children.map((section, idx) => (
            <div key={idx} className="p-4">
              <h4 className="text-rb-gray-400 text-sm font-semibold mb-3 uppercase tracking-wider">
                {section.section}
              </h4>
              <div className="space-y-1">
                {section.items.map((subItem, subIdx) => (
                  <Link
                    key={subIdx}
                    to={subItem.path}
                    className="block text-rb-gray-300 hover:text-[#FF3B3B] hover:font-medium rounded px-3 py-2 transition-all duration-200 relative group/item"
                  >
                    <span className="relative z-10 flex items-center">
                      <ChevronRight 
                        size={16} 
                        className="absolute -left-2 transform opacity-0 -translate-x-2 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                      />
                      <span className="ml-4">{subItem.label}</span>
                    </span>
                  </Link>
                ))}
              </div>
              {idx < item.children.length - 1 && (
                <div className="border-b border-rb-gray-800 my-3"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-rb-black shadow-lg' : 'bg-transparent'
      }`}
      style={{ scrollBehavior: 'smooth' }}
    >
      {/* Main Navigation */}
      <div className={`py-4 ${scrolled ? 'py-2' : ''}`}>
        <div className="container-custom flex justify-between items-center">
          <a 
            href="/" 
            onClick={handleLogoClick}
            className="z-50 cursor-pointer"
          >
            <Logo size="medium" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item, idx) => (
                <li key={idx} className="relative group">
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={`nav-link ${
                        location.pathname === item.path
                          ? 'text-rb-red'
                          : 'text-rb-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className={`nav-link text-rb-white cursor-pointer flex items-center ${
                        item.label === 'Products' ? 'relative' : ''
                      }`}
                      onClick={() => {
                        if (item.label === 'Products') {
                          setIsProductsOpen(!isProductsOpen);
                        }
                      }}
                    >
                      {item.label}
                      {item.children && (
                        <ChevronDown size={16} className="ml-1 opacity-75" />
                      )}
                    </button>
                  )}
                  <DropdownMenu item={item} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-rb-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'tween' }}
                className="fixed inset-0 bg-rb-black bg-opacity-95 md:hidden"
              >
                <div className="h-full overflow-y-auto pt-20 pb-6 px-6">
                  <nav>
                    {navItems.map((item, idx) => (
                      <div key={idx} className="mb-4">
                        {item.path ? (
                          <Link
                            to={item.path}
                            className="text-2xl font-bebas text-rb-white hover:text-rb-red transition-colors"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <>
                            <h2 className="text-2xl font-bebas text-rb-white mb-2">
                              {item.label}
                            </h2>
                            {item.children?.map((section, sectionIdx) => (
                              <div key={sectionIdx} className="mb-4 ml-4">
                                <button
                                  onClick={() => toggleSection(section.section)}
                                  className="flex items-center justify-between w-full text-rb-gray-400 text-sm font-semibold mb-2 hover:text-rb-white transition-colors"
                                >
                                  <span>{section.section}</span>
                                  <ChevronDown
                                    size={16}
                                    className={`transform transition-transform duration-200 ${
                                      expandedSections.includes(section.section) ? 'rotate-180' : ''
                                    }`}
                                  />
                                </button>
                                <AnimatePresence>
                                  {expandedSections.includes(section.section) && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="space-y-2 ml-4 overflow-hidden"
                                    >
                                      {section.items.map((subItem, subIdx) => (
                                        <Link
                                          key={subIdx}
                                          to={subItem.path}
                                          className="block text-rb-gray-300 hover:text-[#FF3B3B] hover:font-medium py-1 relative group/item"
                                        >
                                          <span className="relative z-10 flex items-center">
                                            <ChevronRight 
                                              size={16} 
                                              className="absolute -left-2 transform opacity-0 -translate-x-2 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                                            />
                                            <span className="ml-4">{subItem.label}</span>
                                          </span>
                                        </Link>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;