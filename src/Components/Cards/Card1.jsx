import React from 'react'
import './Card1.css'

const Card1 = (props) => {
    return (
        <div>
            <div className="card" style={{ width: '18rem', marginTop: "20px" }}>
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.cardBody}</p>
                </div>
            </div>
        </div>
    )
}

export default Card1