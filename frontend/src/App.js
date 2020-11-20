import React from 'react';
import './app.css'
import { Switch, Route, BrowserRouter} from 'react-router-dom'

// //components
import Mensagem from './pages/Mensagem'
import Lista from './pages/Listagem'
import Produto from './pages/Produto'
import Home from './pages/Home'
import User from './pages/Usuario/Cartao/cartao'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro';

const App = () => (
   <>   
   <BrowserRouter>
      <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/produto/' component={Lista} />
         <Route exact path='/produto/:id' component={Produto} />
         <Route exact path='/mensagem' component={Mensagem} /> 
         <Route exact path='/user' component={User} />
         <Route exact path='/login' component={Login} />
         <Route exact path='/cadastrar' component={Cadastro} />
      </Switch>
   </BrowserRouter>
   </>

   );

export default App;