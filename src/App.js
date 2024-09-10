import React from 'react';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Layout from './components/Layout/Layout';
import { Link, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;