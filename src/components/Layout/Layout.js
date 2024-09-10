// src/components/Layout/Layout.js
// Purpose: Defines the overall layout structure for the application.
// Expected content: Common elements like Header and Footer, and a container for page-specific content.

import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
