import React from "react"
import "./Card.css"

const Card = props => (
  <div className="Card" id={props.id}>
    <img id="img" src={props.image} />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    <img id="bg" src={props.bg} />
  </div>
)

export default Card
