import { useState, useEffect, useCallback } from 'react';
import { Box } from '@mui/system';

import { useAxios } from '../hooks/use-axios';
import { IBook } from '../ts/books';

import Header from '../layout/Header';
import LoadingSpinner from '../shared/LoadingSpinner';
import BooksTable from '../components/books/BooksTable';
import AddBookButton from '../components/books/AddBookButton';

const Books: React.FC = () => {
    const [books, setBooks] = useState<IBook[]>([]);
    const [authorName, setAuthorName] = useState('0');
    const { sendRequest, isLoading, error } = useAxios();
    const [filteredBooks, setFilteredBooks] = useState<IBook[]>([]);

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
                    setFilteredBooks([...response.data.records]);
                }
            } catch (error) {}
        };

        fetchBooks();
    }, [sendRequest]);

    useEffect(() => {
        const filteredBooks = [...books].filter((book) => {
            if (book.nameOfAuthor === authorName) {
                return book;
            } else if (authorName === '0') {
                return [...books];
            }
            return;
        });

        setFilteredBooks(filteredBooks);
    }, [authorName, books]);

    return (
        <>
            {isLoading && <LoadingSpinner />}
            <Box
                sx={{
                    maxWidth: '1024px',
                    margin: 'auto',
                    position: 'relative'
                }}
            >
                <div className="books__header">
                    <Header
                        title="Books"
                        books={books}
                        onChangeAuthor={handleChangeAuthor}
                        selectedAuthorName={authorName}
                    />
                </div>
                <Box>
                    <AddBookButton />
                </Box>
                <div className="books__content">
                    {filteredBooks.length ? (
                        <BooksTable
                            books={filteredBooks}
                            onDeleteBook={handleDeleteBook}
                        />
                    ) : null}
                </div>
            </Box>
        </>
    );
};

export default Books;
