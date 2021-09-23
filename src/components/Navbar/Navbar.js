import React, {Component} from 'react';
import { Button } from '../Button';
import { MenuItems } from "./MenuItems"
import './Navbar.css'


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
            <nav className="NavbarItems sticky-top navbar navbar-light bg-light">
                <h1 className="navbar-logo">Recetas de la Jefa</h1>
                <div onClick={this.handleClick}>
                    <i className={this.state.clicked ? "menu-icon close-button" : "menu-icon "}>{this.state.clicked ? "Close" : "..."}</i>
                </div>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li className="nav-item" key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })} 
                    <Button>Login</Button>
                </ul>
            </nav>
        ) 
    }
}

export default Navbar