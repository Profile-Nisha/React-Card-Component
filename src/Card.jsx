import React from 'react'
import "./Card.css"


function Card(props) {
  return (
    <div className='card'>
        <img src="https://media.istockphoto.com/id/1456192902/photo/close-up-photo-of-woman-hands-typing-business-report-on-a-laptop-keyboard-in-the-cafe.webp?s=2048x2048&w=is&k=20&c=StjR8v-uio9-Y9g3LE6fhwE6OYukyS25mSqj1b-N8_E=" alt="" width="310" style={{border: "2px solid black"}}></img>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
