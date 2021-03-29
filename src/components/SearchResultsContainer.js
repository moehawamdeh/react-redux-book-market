import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import ThemedCard from './ThemedCard';
import { Row } from 'react-bootstrap';
import PlaceholderBookCard from './PlaceholderBookCard';
import PropTypes from 'prop-types';
import SearchResultsHint from './SearchResultsHint';

function SearchResultsContainer ({ searchText }) {
  const [searchResult, setResult] = useState({ loading: true, books: [] });
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    searchText && searchText.length &&
    fetch('/1.0/search/' + searchText, {
      Method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      signal
    })
      .then((res) => res.json()).then((response) => { setResult({ loading: false, books: response.books }); });
      return 
  }, [searchText]);
  return (
        <ThemedCard className="shadow col px-3 mr-2" >
          <Row className="m-4">
            {!searchResult.loading && searchText && searchText.length && <SearchResultsHint text={searchText} found={searchResult.books.length > 0} />}
          </Row>
          <Row>
              { (searchText && searchText.length) && searchResult.loading && [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                key => <PlaceholderBookCard key = {key}/>
              )}

            {searchResult.books.length !== 0 && searchResult.books.map(book =>
          <BookCard key= { book.isbn13 } book={{ price: book.price, image: book.image }}></BookCard>)}</Row>
        </ThemedCard>
  );
}

SearchResultsContainer.propTypes = {
  searchText: PropTypes.string
};
export default SearchResultsContainer;
