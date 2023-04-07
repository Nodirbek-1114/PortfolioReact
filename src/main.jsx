import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/header';
import Hero from './Pages/Hero/hero';
import Recent from './Pages/Recent/Recent';
import Featured from './Pages/Featured/Featured';
import Footer from './components/Footer/Footer';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Header />
      <main>
        <Hero />
        <Recent />
        <Featured />
      </main>
      <Footer />
    </>
  </React.StrictMode>,
)
