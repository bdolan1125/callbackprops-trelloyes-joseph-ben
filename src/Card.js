import React from 'react';
import './Card.css';

export default function Card(props) {
  const newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }
  return (
    <div className='Card'>
      <button
        type='button' 
       onClick = {() => {
         console.log(props.id)

        props.hotdog(props.id)
        }}
      >
        delete
      </button>
      <button
        type='button' 
       onClick = {() => {
         newRandomCard(); 
        }}
      >
        Add random card
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}
