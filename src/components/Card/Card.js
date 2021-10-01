import React from 'react';
import history from '../History';
import './Card.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

function Card(props) {
    return (
        <Link>
            <div className="card" onClick={() => history.push(props.path)}>
            <div className="card-title">{props.title}</div>
            <img src={props.url} className="card-img-top" alt={props.alt} />
            <div className="card-body">
                <p className="card-text">{props.desc}</p>
            </div>
        </div>
        </Link>
        /* <div className="card" onClick={() => history.push(props.path)}>
            <div className="card-title">{props.title}</div>
            <img src={props.url} className="card-img-top" alt={props.alt} />
            <div className="card-body">
                <p className="card-text">{props.desc}</p>
            </div>
        </div> */
    )
}
export default Card