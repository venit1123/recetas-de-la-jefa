import React from 'react';
import './Card.css'

function Card(props) {
    return (
        <div className="card">
            <div>{props.title}</div>
            <img src={props.url} class="card-img-top" alt={props.alt}/>
            <div class="card-body">
                <p class="card-text">{props.desc}</p>
            </div>
        </div>
    )
}
export default Card