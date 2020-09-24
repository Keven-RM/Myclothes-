import React from 'react';
import './app.css'

//components
import Header from './components/header'
import Footer from './components/footer'
import Lista from './pages/Home'
import User from './pages/Usuario'


const App = () => (
   <React.Fragment>
   <Header />
   <React.Fragment>
      <User />
   </React.Fragment>
   <Footer />
   </React.Fragment>
);

export default App;
