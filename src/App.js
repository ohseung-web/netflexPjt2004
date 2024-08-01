import React from 'react';
//컴포넌트 loads
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main' 
// css
import './App.css';
import './styles/Common.css'


function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
