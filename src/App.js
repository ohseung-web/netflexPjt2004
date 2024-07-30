import './App.css';
import React from 'react';
// import Test from './pages/test';
//컴포넌트 loads
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Row from './components/Row';
import MovieCard from './components/MovieCard';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Row />
      <MovieCard />
      <Footer />
    </>
  );
}

export default App;
