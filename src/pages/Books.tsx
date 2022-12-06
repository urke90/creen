import { useState, useEffect } from 'react';
import { Box } from '@mui/system';

import { useAxios } from '../hooks/use-axios';
import { IBook } from '../ts/books';

import Header from '../layout/Header';
import LoadingSpinner from '../shared/LoadingSpinner';
import BooksTable from '../components/books/BooksTable';

const Books: React.FC = () => {
    const [books, setBooks] = useState<IBook[]>([]);
    const { sendRequest, isLoading, error } = useAxios();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await sendRequest({ url: 'books' });

                if (
                    response?.status === 200 &&
                    response.data.records.length > 0
                ) {
                    setBooks(response.data.records);
                }

                console.log('response', response);
            } catch (error) {}
        };
        if (books.length === 0) {
            fetchBooks();
        }
    }, [books.length, sendRequest]);

    return (
        <>
            {isLoading && <LoadingSpinner />}
            <Box sx={{ maxWidth: '1024px', margin: 'auto' }} className="books">
                <div className="books__header">
                    <Header title="Books" />
                </div>
                <div className="books__content">
                    <BooksTable books={books} />
                </div>
            </Box>
        </>
    );
};

export default Books;
