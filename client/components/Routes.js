import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {AuthRoute, Login, Signup} from './auth'
import Welcome from './Welcome'
import Home from './Home'
import NoMatch from './NoMatch'
import {Products, SingleProductView} from './products'
import {Cart} from './cart'
//import SingleProductView from './products/SingleProductView'

const Routes = () => (
  <div className='fill-xy center-xy column'>
    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <AuthRoute path='/home' component={Home} />
      <Route exact path='/products' component={Products} />
      <Route path='/products/:productId' component={SingleProductView} />
      <Route path='/cart' component={Cart} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default Routes
