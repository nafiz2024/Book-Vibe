import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {

    const [storedBooks, setStoredBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleReadButton = (currentBook) => {

        const isExistBook = storedBooks.find((book) => book.bookId === currentBook.bookId);
        
        if (isExistBook) {
            toast.error(`You have already added this ${currentBook.bookName} to your read list.`);
        } else {
            setStoredBooks([...storedBooks, currentBook]);
            toast.success(` ${currentBook.bookName} the book has been added to your read list.`);
        }
    };

    const handleWishListButton = (currentBook) => {
       
        const isExistInReadList = storedBooks.find(
            (book) => book.bookId === currentBook.bookId
        );

        if (isExistInReadList) {
            toast.error(`You have already added this ${currentBook.bookName} to your read list. You can't add it to your wish list.`);
            return;
        }

        const isExistBook = wishList.find((book) => book.bookId === currentBook.bookId);
       
        if (isExistBook) {
            toast.error(`You have already added this ${currentBook.bookName} to your wish list.`);
        } else {
            setWishList([...wishList, currentBook]);
            toast.success(` ${currentBook.bookName} has been added to your wish list.`);
        }
    };


    const data = {
        storedBooks,
        setStoredBooks,
        handleReadButton,
        wishList,
        setWishList,
        handleWishListButton,
    };

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;