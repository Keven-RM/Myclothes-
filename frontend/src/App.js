import React from 'react';
import './app.css'
import { Switch, Route, BrowserRouter} from 'react-router-dom'

// //components
import Mensagem from './pages/Mensagem'
// import Lista from './pages/Listagem'
import Produto from './pages/Produto'
// import Home from './pages/Home'
import User from './pages/Usuario/'
import Login from './pages/Login'

const App = () => (
   <>
      {/* <Produto url="5f7e738f43508514b8d098da" /> */}
   
   <BrowserRouter>
      <Switch>
         {/* <Route exact path='/' component={Home} />*/}
         {/* <Route exact path='/produto/' component={Lista} /> */}
         <Route exact path='/produto/:id' component={Produto} />      
         <Route exact path='/mesagem' component={Mensagem} /> 
         <Route exact path='/user' component={User} />
         <Route exact path='/login' component={Login} />
      </Switch>
   </BrowserRouter>
   </>

   );

export default App;