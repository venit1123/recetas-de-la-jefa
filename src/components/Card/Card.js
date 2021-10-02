import React from 'react';
import { NavLink } from "react-router-dom"
import './Card.css'

function Card(props) {
    return (
        <NavLink 
            exact 
            to={props.path}
            style={{
                color: "black",
                textDecoration: 'none'
            }}
        >
            <div className="card">
                <div className="card-title">{props.title}</div>
                <img src={props.url} className="card-img-top" alt={props.alt} />
                <div className="card-body">
                    <p className="card-text">{props.desc}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default Card