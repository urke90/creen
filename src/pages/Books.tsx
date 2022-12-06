import { useState, useEffect, useCallback } from 'react';
import { Box } from '@mui/system';

import { useAxios } from '../hooks/use-axios';
import { IBook } from '../ts/books';

import Header from '../layout/Header';
import LoadingSpinner from '../shared/LoadingSpinner';
import BooksTable from '../components/books/BooksTable';

const Books: React.FC = () => {
    const [books, setBooks] = useState<IBook[]>([]);
    const [authorName, setAuthorName] = useState('');
    const { sendRequest, isLoading, error } = useAxios();

    const handleChangeAuthor = useCallback(
        (name: string) => setAuthorName(name),
        []
    );
    const handleDeleteBook = useCallback(
        async (id: number) => {
            try {
                const response = await sendRequest({
                    url: `books/${id}`,
                    method: 'DELETE'
                });
                if (response?.status === 200) {
                    setBooks((prevBooks) =>
                        prevBooks.filter((book) => book.id !== id)
                    );
                }
                console.log('response DELETE BOOK', response);
            } catch (error) {}
        },
        [sendRequest]
    );

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

        fetchBooks();
    }, [sendRequest]);

    return (
        <>
            {isLoading && <LoadingSpinner />}
            <Box sx={{ maxWidth: '1024px', margin: 'auto' }}>
                <div className="books__header">
                    <Header
                        title="Books"
                        books={books}
                        onChangeAuthor={handleChangeAuthor}
                        selectedAuthorName={authorName}
                    />
                </div>
                <div className="books__content">
                    {books.length ? (
                        <BooksTable
                            books={books}
                            onDeleteBook={handleDeleteBook}
                        />
                    ) : null}
                </div>
            </Box>
        </>
    );
};

export default Books;
