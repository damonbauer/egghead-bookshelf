import React from 'react';
import { meanBy, round, sortBy } from 'lodash';
import { FormattedMessage } from 'react-intl';

import books from '../books.json';

const BookDetail = ({match}) => {
  const book = books.find(book => book.id === parseInt(match.params.bookId, 10));
  const sortedReviews = sortBy(book.reviews, 'date').reverse();
  const avgRating = round(meanBy(book.reviews, (r) => r.rating), 2);

  return (
    <div className="BookDetail">
      <div className="BookDetail-meta">
        <img src={book.image} width="200" height="275" alt={book.title}/>
        <div className="BookDetail-metaBody">
          <h1>{book.title}</h1>
          <h3>
              <FormattedMessage id="detail.author" values={{author: book.author}} />
          </h3>
          <div>
            <input type="checkbox" id="toggle" hidden/>
            <p>{book.description}</p>
            <label className="BookDetail-descriptionToggle" htmlFor="toggle">
              <FormattedMessage id="detail.toggle"/>
            </label>
          </div>
        </div>
      </div>

      <h3 className="BookDetail-merchantHeading">
        <FormattedMessage id="detail.purchase"/>
      </h3>
      <div className="BookDetail-merchants">
        {book.merchants.map((merchant) => (
          <a href={merchant.link} className="Merchant" key={merchant.name}>
            <img src={merchant.icon} width="32" height="32" alt={merchant.name}/>
            <strong>{merchant.name}</strong>
            <p>{merchant.price}</p>
          </a>
        ))}
      </div>

      <h2>
        <FormattedMessage id="detail.reviewsHeading"/>
      </h2>
      <h3>
          <FormattedMessage id="detail.averageRating" values={{ avg: avgRating }} /> ({book.reviews.length} Reviews)
      </h3>
      <div className="BookDetail-reviews">
        {sortedReviews.map((review) => (
          <div className="Review" key={review.date}>
            <div className="Review-meta">
              <img src={review.avatar} alt="Avatar"/>
              <p>
                <FormattedMessage id="detail.userRating" values={{ name: <strong>{review.name}</strong>, rating: review.rating }} /><br />
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
            <p>{review.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookDetail;
