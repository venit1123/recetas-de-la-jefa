import React, {Component} from 'react';
import { Button } from '../Button';
import { MenuItems } from "./MenuItems"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link } from "react-router-dom"

import './Navbar.css'
import Home from '../../pages/Home';
import NewReceta from '../../pages/NewReceta';
import Recetas from '../../pages/Recetas'

// Search why one should create a class (because we are utilizing state)
class Navbar extends Component{
    state = { clicked: false }

    handleClick = () => {
        /*  Change menu icon class name if icon has 
            been clicked (True || False). 
            Class name changes:
                - icon ("X" || "Hamburger")
                - Orientation of the Menu Items
        */
        this.setState({ clicked: !this.state.clicked})
    }

    render(){ // always need a render. check what render is
        return (
            <Router>
                <div>
                    <nav className="NavbarItems sticky-top navbar navbar-light bg-light">
                        <h1 className="navbar-logo">Recetas de la Jefa</h1>
                        <div onClick={this.handleClick}>
                            <i className={this.state.clicked ? "menu-icon close-button" : "menu-icon "}>{this.state.clicked ? "Close" : "..."}</i>
                        </div>

                        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            {MenuItems.map((menuItem, index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        <Link className={menuItem.cName} to={menuItem.to} >{menuItem.title} </Link>
                                    </li>
                                )
                            })}
                            <Button>Login</Button>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/new-receta">
                            <NewReceta />
                        </Route>
                        <Route path="/recetas">
                            <Recetas />
                        </Route>
                    </Switch>
                </div>

            </Router>
        ) 
    }
}

export default Navbar