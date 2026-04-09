import React from 'react';

const ListedWishList = ({ wishList }) => {
    return (
        <div>
            {wishList.map((book) => (
                <div key={book.id}>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                </div>
            ))}
        </div>
    );
};

export default ListedWishList;