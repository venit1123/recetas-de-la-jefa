import React, { Component } from 'react';
import { FoodCardItems } from "../components/Card/FoodCardItems"
import Card from '../components/Card/Card'

class Food extends Component {
    render() {
        return (
            <div className="view container">
                <div className="row"> {FoodCardItems.map((cardItem, index) => {
                    return (
                        <div className="col" key={index}>
                            <Card
                                title={cardItem.title}
                                url={cardItem.url}
                                alt={cardItem.alt}
                                desc={cardItem.desc}
                                path={cardItem.path}
                            />
                        </div>
                    )
                })};
                </div>
            </div>
        )
    }
}
export default Food