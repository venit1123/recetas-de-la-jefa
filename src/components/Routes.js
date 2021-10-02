import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../../pages/Home';
import NewReceta from '../../pages/NewReceta';
import Recetas from '../../pages/Recetas'
import history from './History';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact >
                        <Home />
                    </Route>
                    <Route path="/new-receta">
                        <NewReceta />
                    </Route>
                    <Route path="/recetas" >
                        <Recetas />
                    </Route>
                </Switch>
            </Router>
        )
    }
}