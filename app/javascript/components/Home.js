import React from 'react'
import { NavLink } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div>This is the Home page.</div>
      <NavLink to="/contact"></NavLink> 
    )
  }
}

export default Home;