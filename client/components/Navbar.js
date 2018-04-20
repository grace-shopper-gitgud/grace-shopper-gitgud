import React from 'react'
import {Link} from 'react-router-dom'
import {AuthLink, Logout} from './auth'

const Navbar = () => (
  <nav className='nav bgcolor-darkslateblue'>
    <span className='nav-links'>
      <Link to='/'><img id='logo' src='/favicon.ico' /></Link>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
      <AuthLink to='/home'>Home</AuthLink>
      <Link to='/products'>Products</Link> 
      <AuthLink to='orders'>Orders</AuthLink>
      <AuthLink to='/'><Logout /></AuthLink>
    </span>
    <span className='cart-icon'>
      {/* Placeholder cart image, to turn into a button! */}
      <Link to='/cart'><img id="cart" src="/cart-icon-lightgray.png" /></Link>
    </span>
  </nav>
)

export default Navbar
