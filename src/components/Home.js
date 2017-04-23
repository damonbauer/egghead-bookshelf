import React from "react";
import FeaturedBook from "./FeaturedBook";

import books from "../books.json";

const Home = () => {
  return (
    <div>
      <div className="FeaturedBooks">
        {books.map((book, i) => <FeaturedBook book={book} key={i}/>)}
      </div>
    </div>
  )
}

export default Home;
