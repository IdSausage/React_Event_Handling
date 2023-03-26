import React from "react";
import '../styles/card.css'

function Card({user})
{
    return(
        <div className="card-container">
            <div className="card-body">
                <p>Name: {user.name}</p>
                <p>Job: {user.job}</p>
                <p>Hobby: {user.hobby}</p>
            </div>
        </div>
    );
}
export default Card