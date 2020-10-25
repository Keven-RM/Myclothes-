import React from 'react';
import './app.css'
import { Switch, Route, BrowserRouter} from 'react-router-dom'
//components

import Mensagem from './pages/Mensagem'
import Lista from './pages/Listagem'
import User from './pages/Usuario'
import Produto from './pages/Produto'
import Home from './pages/Home'

const App = () => (
   <>
      {/* <Produto url="5f7e738f43508514b8d098da" /> */}
   <BrowserRouter>
      <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/produto/listar/:search' component={Lista} />
         <Route exact path='/user' component={User} />
         <Route exact path='/produto/:id' component={Produto} />      
         <Route exact path='/mesagem' component={Mensagem} />
      </Switch>
   </BrowserRouter>
   </>
   );

export default App;