import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import TrackOrderPage from './pages/TrackOrderPage';

// Product Pages - using simplified structure
import RugbyKitsPage from './pages/products/RugbyKitsPage';
import RugbyJerseysPage from './pages/products/RugbyJerseysPage';

import NetballKitsPage from './pages/products/NetballKitsPage';
import NetballDressPage from './pages/products/NetballDressPage';

import HockeyKitsPage from './pages/products/HockeyKitsPage';
import SoccerKitsPage from './pages/products/SoccerKitsPage';
import CricketKitsPage from './pages/products/CricketKitsPage';
import AthleticsKitsPage from './pages/products/AthleticsKitsPage';

import MatricJacketsPage from './pages/products/MatricJacketsPage';
import MatricJacketPage from './pages/products/MatricJacketPage';

import GolfApparelPage from './pages/products/GolfApparelPage';
import DartsShirtsPage from './pages/products/DartsShirtsPage';
import GymwearPage from './pages/products/GymwearPage';
import StaffUniformsPage from './pages/products/StaffUniformsPage';
import StaffJacketsPage from './pages/products/StaffJacketsPage';
import TeamwearSetsPage from './pages/products/TeamwearSetsPage';

// Catalogue Pages - using simplified structure
import BaseCataloguePage from './components/shared/BaseCataloguePage';

// Simplified catalogue pages
const AthleticCataloguePage = () => (
  <BaseCataloguePage
    title="Athletic Apparel Catalogue"
    description="Explore our complete range of athletic apparel designed for peak performance"
    previewImage="https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg"
    collectionName="2024 Athletic Collection"
    collectionSubtitle="Complete product range and specifications"
    features={['Track & Field Uniforms', 'Running Apparel', 'Team Warm-up Gear', 'Athletic Accessories', 'Sizing Charts & Specifications', 'Customization Options']}
    pages="48 pages"
    fileSize="12.5 MB"
    ctaTitle="Need Custom Athletic Apparel?"
  />
);

const MatricCataloguePage = () => (
  <BaseCataloguePage
    title="Matric Apparel Catalogue"
    description="Celebrate your matriculation with our premium custom matric jackets and apparel"
    previewImage="https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg"
    collectionName="2024 Matric Collection"
    collectionSubtitle="Premium jackets and customization options"
    features={['Standard Matric Jackets', 'Premium Matric Jackets', 'Embroidery Options', 'Color Combinations', 'Sizing Guide', 'Ordering Process']}
    pages="32 pages"
    fileSize="8.2 MB"
    ctaTitle="Ready to Order Your Matric Jackets?"
  />
);

function App() {
  return (
    <Router>
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/track-order" element={<TrackOrderPage />} />
            <Route path="/products" element={<ProductsPage />} />
            
            {/* Product Routes - simplified */}
            <Route path="/products/rugby-kits" element={<RugbyKitsPage />} />
            <Route path="/products/rugby-kits/*" element={<RugbyJerseysPage />} />
            
            <Route path="/products/netball-kits" element={<NetballKitsPage />} />
            <Route path="/products/netball-kits/*" element={<NetballDressPage />} />
            
            <Route path="/products/hockey-kits" element={<HockeyKitsPage />} />
            <Route path="/products/soccer-kits" element={<SoccerKitsPage />} />
            <Route path="/products/cricket-kits" element={<CricketKitsPage />} />
            <Route path="/products/athletics-kits" element={<AthleticsKitsPage />} />
            
            <Route path="/products/matric-jackets" element={<MatricJacketsPage />} />
            <Route path="/products/matric-jackets/*" element={<MatricJacketPage />} />
            
            <Route path="/products/golf-apparel" element={<GolfApparelPage />} />
            <Route path="/products/darts-shirts" element={<DartsShirtsPage />} />
            <Route path="/products/gymwear" element={<GymwearPage />} />
            <Route path="/products/staff-uniforms" element={<StaffUniformsPage />} />
            <Route path="/products/staff-jackets" element={<StaffJacketsPage />} />
            <Route path="/products/teamwear-sets" element={<TeamwearSetsPage />} />
            
            {/* Catalogue Routes */}
            <Route path="/catalogues/athletic" element={<AthleticCataloguePage />} />
            <Route path="/catalogues/matric" element={<MatricCataloguePage />} />
            <Route path="/catalogues/*" element={<AthleticCataloguePage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </Router>
  );
}

export default App;