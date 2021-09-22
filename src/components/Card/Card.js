import React from 'react';
import './Card.css'

function Card(props) {
    return (
        <div className="card">
            <div>{props.title}</div>
            <img src={props.url} className="card-img-top" alt={props.alt}/>
            <div className="card-body">
                <p className="card-text">{props.desc}</p>
            </div>
        </div>
    )
}
export default Card