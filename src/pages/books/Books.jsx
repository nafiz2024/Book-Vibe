import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

const books = () => {

    const { storedBooks } = useContext(BookContext);

    return (
        <div className='container mx-auto px-5 lg:px-0 flex flex-col gap-14'>
            <div className="flex flex-col items-center justify-center gap-8">
                <div className="bg-[#131313]/5 rounded-2xl w-full flex items-center justify-center">
                    <h1 className='text-3xl font-bold py-8'>Books</h1>
                </div>
                <div className="">
                    <div className="btn">Sort By</div>
                </div>
            </div>
            <div className="">

            </div>
        </div>
    );
};

export default books;