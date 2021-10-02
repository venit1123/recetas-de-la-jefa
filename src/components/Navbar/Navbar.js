import React, { Component } from 'react';
import { Button } from '../Button';
import { MenuItems } from "./MenuItems"
import { BrowserRouter as Router, NavLink, Switch, Route } from "react-router-dom"
import { GlobalVariables } from '../GlobalVariables'
import Home from '../../pages/Home';
import NewReceta from '../../pages/NewReceta';
import Recetas from '../../pages/Recetas'
import './Navbar.css'


// Search why one should create a class (because we are utilizing state)
class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        /*  Change menu icon class name if icon has 
            been clicked (True || False). 
            Class name changes:
                - icon ("X" || "Hamburger")
                - Orientation of the Menu Items
        */
        this.setState({ clicked: !this.state.clicked })
    }

    render() { // always need a render. check whats render is
        return (
            <Router>
                <div>
                    <nav className="NavbarItems sticky-top navbar navbar-light bg-light">
                        <h1 className="navbar-logo">{GlobalVariables.APP_TITLE}</h1>
                        <div onClick={this.handleClick}>
                            <i className={this.state.clicked ? "menu-icon close-button" : "menu-icon "}>{this.state.clicked ? "Close" : "X"}</i>
                        </div>
                        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            {MenuItems.map((menuItem, index) => {
                                return (
                                    <div>
                                        <NavLink 
                                            exact
                                            activeClassName="selected"
                                            to={menuItem.path}
                                            style={{
                                                color: "black",
                                                textDecoration: 'none'
                                            }}
                                            activeStyle={{
                                                fontWeight: "bold",
                                                color: "#ef8354",
                                            }}
                                        >
                                            <div>
                                                <li key={index}> {menuItem.title} </li>
                                            </div>
                                        </NavLink> 
                                    </div>
                                )
                            })}
                            <Button>Login</Button>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/new-receta" exact component={NewReceta}/>
                        <Route path="/recetas" exact component={Recetas}/>
                    </Switch>
                    </div>
                </Router>
        )
    }
}

export default Navbar