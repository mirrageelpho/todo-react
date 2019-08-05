import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Routes from './routes'

function App() {
  return (
    <>
        <Header />
        <Routes />
        <Footer />
        <div className="fake-footer"></div>
    </>
  );
}

export default App;
