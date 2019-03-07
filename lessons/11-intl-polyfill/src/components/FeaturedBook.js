import React from 'react';
import {Link} from 'react-router-dom';

const FeaturedBook = ({book}) => {
  return (
    <Link to={`book/${book.id}`} className="FeaturedBook">
      <img src={book.image} width="200" height="275" alt={book.title}/>
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
    </Link>
  )
}

export default FeaturedBook;
