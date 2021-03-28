import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import ThemedCard from './ThemedCard';
import PlaceholderBookCard from './PlaceholderBookCard';

function NewBooksSideBar () {
  const [newBooks, setNewBooks] = useState([]);
  useEffect(() => {
    fetch('/1.0/new', {
      Method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        mode: 'no-cors'
      }
    })
      .then((res) => res.json()).then((response) => { setNewBooks(response.books); });
  }, []);
  return (
        <ThemedCard className="shadow-sm px-3 mr-3" >
              {newBooks && newBooks.length === 0 && [0, 1, 2, 3, 4].map(
                key => <PlaceholderBookCard key = {key}/>
              )}
            {newBooks && newBooks.length !== 0 && newBooks.map(book =>
          <BookCard key= { book.isbn13 } book={{ price: book.price, image: book.image }}></BookCard>)}
        </ThemedCard>
  );
}

export default NewBooksSideBar;
