import React, { Component } from 'react';
import { HomeCardItems } from "../components/Card/HomeCardItems"
import Card from '../components/Card/Card'

class Home extends Component {
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
                                path={cardItem.path}
                            />
                        </div>
                    )})};
                </div>
            </div>
        )
    }
}

export default Home