import './App.css';
import React from 'react';
import Test from './pages/test';
import Header from './components/Header';
import Section from './components/Section';
import MovieType from './pages/MovieType';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path={'/'} element={<Section />} />
          <Route path={'/MovieType/:id'} element={<MovieType />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
