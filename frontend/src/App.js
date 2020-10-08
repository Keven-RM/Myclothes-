import React from 'react';
import './app.css'
import api from './services/api'

//components
import Header from './components/header'
import Footer from './components/footer'

// import Mensagem from './pages/Mensagem'
import Lista from './pages/Listagem'
// import User from './pages/Usuario'
// import Produto from './pages/Produto'

const App = () => (
   <>
   <Header />
      <Lista />
   <Footer />
   </>
   );

export default App;
