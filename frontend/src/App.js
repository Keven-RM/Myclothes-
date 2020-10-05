import React from 'react';
import './app.css'

//components
// import Mensagem from './pages/Mensagem'
import Header from './components/header'
import Footer from './components/footer'
// import Lista from './pages/Listagem'
// import User from './pages/Usuario'
import Produto from './pages/Produto'

const App = () => (
   <>
   <Header />
      <Produto />
   <Footer />
   </>
   );

export default App;
