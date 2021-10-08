import React, { Component } from 'react';
import { Button } from '../Button';
import { MenuItems } from "./MenuItems"
import { BrowserRouter as Router, NavLink, Switch, Route } from "react-router-dom"
import { GlobalVariables } from '../GlobalVariables'
import Home from '../../pages/Home';
import Food from '../../pages/Food';
import Family from '../../pages/Family';
import Recetas from '../../pages/Recetas'
import NewReceta from '../../pages/NewReceta'
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
                        <div>
                            <h1 className="navbar-logo">{GlobalVariables.APP_TITLE}</h1>
                        </div>

                        <div className="nav-mobile"onClick={this.handleClick}>
                            <i className={this.state.clicked ? "far fa-times-circle" : "fas fa-bars"}/>
                        </div>
                        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            {MenuItems.map((menuItem, index) => {

                                return (
                                    <div>
                                        <NavLink 
                                            onClick={this.handleClick}
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
                            {/* TODO: Add button later <Button>Login</Button> */}
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/recetas-de-la-jefa" component={Home}/>
                        <Route exact path="/family" component={Family}/>
                        <Route exact path="/food/new-receta" component={NewReceta} />
                        <Route exact path="/food/recetas" component={Recetas} />
                        <Route exact path="/food" component={Food} />
                    </Switch>
                    </div>
                </Router>
        )
    }
}

export default Navbar