import React from 'react';
import Header from './components/Header'
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';

const App = () => {
  return (
      <div>
          <Header />
          <Hero />
          <Services />
          <Testimonials />
          <FeedbackForm />
          <Footer />
      </div>
  );
};

export default App
