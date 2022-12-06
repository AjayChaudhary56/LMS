import React from 'react'
import Book from './book.jpg';
import './style.css'
const Card = (props) => {
  return (
    <div className="card-main">
    <div className="card-image">
   <img src={Book}   alt='Book'   />
    </div>
    <div className="card-description">

      <h3>Book Name:{props.bookname} </h3>
      <h4>Book id: {props.id}</h4>
      <h4>Author Name:{props.authoname}</h4>
      <h4>Department:{props.department}</h4>
    </div>
   </div>
  )
}

export default Card
