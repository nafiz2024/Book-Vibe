import React from 'react';

const ListedReadList = ({ storedBooks }) => {
    return (
        <div>
            {storedBooks.map((book) => (
                <div key={book.id}>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                </div>
            ))}
        </div>
    );
};

export default ListedReadList;