import React from 'react';
import history from '../History';
import { Link } from "react-router-dom"
import './Card.css'

function Card(props) {
    return (
        <Link to={props.path}>
            <div className="card" onClick={() => history.push(props.path)}>
                <div className="card-title">{props.title}</div>
                <img src={props.url} className="card-img-top" alt={props.alt} />
                <div className="card-body">
                    <p className="card-text">{props.desc}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card