import { useEffect, useState } from 'react';

export const useFavoriteBooks = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    const booksStringified = localStorage.getItem('favoriteBooks');
    const booksId = JSON.parse(booksStringified) || [];
    setFavoriteBooks(booksId);
  }, []);

  const toggleFavoriteBook = bookId => {
    const updateFavoriteBooks = favBooks => {
      setFavoriteBooks(favBooks);
      localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
    };

    const isBookInFavorites = favoriteBooks.includes(bookId);

    if (isBookInFavorites) {
      const filteredBooks = favoriteBooks.filter(book => book !== bookId);
      updateFavoriteBooks(filteredBooks);
    } else {
      const favoritesWithNewBook = [...favoriteBooks, bookId];
      updateFavoriteBooks(favoritesWithNewBook);
    }
  };

  return {
    favoriteBooks,
    toggleFavoriteBook,
  };
};
