import React, { use } from 'react';
import { FaRegStar } from 'react-icons/fa';

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {

    const books = use(booksPromise);

    return (
        <div className='container mx-auto mt-24 flex flex-col gap-9'>
            <h1 className='text-[40px] font-bold'>Book</h1>

            {
                books.map((book) => {
                    return (
                        <div className="card bg-base-100 w-96 shadow-sm p-6 border border-[#131313]/15 rounded-2xl">
                            <figure>
                                <img
                                    src={book.image}
                                    alt={book.bookName} />
                            </figure>
                            <div className="card-body p-0 flex flex-col gap-4 pb-2.5 border-b border-dashed border-[#131313]/15 mt-6">
                                <div className="flex gap-3">
                                    {book.tags.map((tag) => (
                                        <div className="badge badge-soft badge-success">{tag}</div>
                                    ))}
                                </div>
                                <h2 className="card-title text-2xl font-bold">
                                    {book.bookName}
                                </h2>
                                <p className='font-medium'>By: {book.author}</p>
                            </div>
                            <div className="flex items-center justify-between mt-2.5">
                                <p className='font-medium'>{book.category}</p>
                                <div className="flex items-center gap-1">
                                    <p className='font-medium'>{book.rating}</p>
                                    <FaRegStar />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllBooks;