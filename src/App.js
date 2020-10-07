import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"
import Home from './module/Home'
import Categories from './module/Categories'
import OutBlog from './module/OutBlog'
import Contact from './module/Contacts'
class App extends React.Component {

  componentDidMount() {
    fetch('https://api.github.com/gists')
      .then(res => res.json())
      .then(gists => {
        console.log(gists)
      })
  }

  render() {
    return (
      <Router>
        <div className="parent">
          <div className="header">
            <div className="menu">
              <ul className="menu-ul">
                <li className="menu-li" >
                  <NavLink className="nav_link" activeStyle={{ color: 'red' }} to="/home">Home</NavLink ></li>
                <li className="menu-li" >
                  <NavLink className="nav_link_submenu" activeStyle={{ color: 'red' }} to="/categories">Categories</NavLink >
                  <ul className='submenu'>
                    <li><a href="#" title="Sub Menu">Sub Menu</a></li>
                    <li><a href="#" title="Sub Menu">Sub Menu 2</a></li>
                    <li><a href="#" title="Sub Menu">Sub Menu 3</a></li>
                  </ul>
                  </li>
                <li className="menu-li" >
                  <NavLink className="nav_link" activeStyle={{ color: 'red' }} to="/blog">Our Blog</NavLink ></li>
                <li className="menu-li" >
                  <NavLink className="nav_link" activeStyle={{ color: 'red' }} to="/contacts">Contacts</NavLink >
                </li>
              </ul>
            </div>
          </div>
          <div className="content">
            <Switch>
              <Route path="/blog">
                <OutBlog />
              </Route>
              <Route path="/categories">
                <Categories />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/contacts">
                <Contact />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
