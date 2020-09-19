import React from 'react';
import './app.css'

//components
import Header from './components/header'
import Footer from './components/footer'

import Lista from './pages/home'


const App = () => (
   <React.Fragment>
   <Header />
   <React.Fragment>
      <Lista />
   </React.Fragment>
   <Footer />
   </React.Fragment>
);

export default App;
