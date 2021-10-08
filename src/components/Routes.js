import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../../pages/Home';
import Food from '../../pages/Food';
import Family from '../../pages/Family';
import Recetas from '../../pages/Recetas'
import NewReceta from '../../pages/NewReceta'

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/recetas-de-la-jefa" component={Home}/>
                    <Route exact path="/food" component={Food} />
                    <Route exact path="/family" component={Family} />
                    <Route exact path="/food/new-receta" component={NewReceta} />
                    <Route exact path="/food/recetas" component={Recetas} />
                </Switch>
            </Router>
        )
    }
}

export default Routes