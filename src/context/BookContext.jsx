import React, { Children, createContext, useState } from 'react';

export const BookContext = createContext();

const BookProvider = ({ children }) => {

    const [storedBooks, setStoredBooks] = useState([]);

    const handleReadButton = (currentBook) => {
        const isExistBook = storedBooks.find((book) => book.bookId === currentBook.bookId);
        if (isExistBook) {
            alert("You have already read this book.");
        } else {
            setStoredBooks([...storedBooks, currentBook]);
            alert("Book added to your read list.");
        }
        console.log(currentBook, storedBooks);
    };

    const data = {
        storedBooks,
        setStoredBooks,
        handleReadButton,
    };

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;