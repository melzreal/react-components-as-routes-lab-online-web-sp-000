import React from 'react';
import { NavLink } from 'react-router-dom';


const link = {

  width: '40px',
  padding: '10px',
  margin: '0 6px 6px',
  background: 'grey',
  textDecoration: 'none',
  color: 'white',

}

const NavBar = () =>
  <div className="navbar">
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/movies"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Movies</NavLink>
    <NavLink
      to="/directors"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Directors</NavLink>
      <NavLink
      to="/actors"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Actors</NavLink>
  </div>;

export default NavBar;
