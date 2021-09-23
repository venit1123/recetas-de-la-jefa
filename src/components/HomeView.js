import React, { Component } from 'react';
import { HomeCardItems } from "./Card/HomeCardItems"
import Card from './Card/Card'

class HomeView extends Component {
    render() {
        return (
            <div className="view container">
                <div className="row"> {HomeCardItems.map((cardItem, index) => {
                    return (
                        <div className="col" key={index}>
                            <Card
                                title={cardItem.title}
                                url={cardItem.url}
                                alt={cardItem.alt}
                                desc={cardItem.desc}
                            />
                        </div>
                    )})};
                </div>
            </div>
        )
    }
}

export default HomeView