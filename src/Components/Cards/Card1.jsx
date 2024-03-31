import React from 'react'
import './Card1.css'

const Card1 = (props) => {
    return (
        <div >
            <div className="card" style={{ width: '18rem'}}>
                <img src={props.img} className="card-img-top" alt="image" />
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <br />
                    <p className="card-text">{props.cardBody}</p>
                    <p className="card-text text-muted">{props.cardDate}</p>
                </div>
            </div>
        </div>
    )
}

export default Card1