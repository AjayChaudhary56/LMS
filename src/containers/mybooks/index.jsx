import React from 'react';
import Card from './card';
const CloneCard = ( )=>{
  var btn = document.querySelector("books-cards");
  var clone = btn.cloneNode(true);
  btn.after(clone);
    }
const MyBooks = () => {
  
  return (
    <>
 <div className="book-cards">
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
 </div>
  <button id="btn" type='submit' onSubmit={CloneCard}>Clone</button>
 </>
 
  )
}

export default MyBooks;