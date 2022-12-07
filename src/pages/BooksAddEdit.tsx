import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';

import { IBook } from '../ts/books';
import { useAxios } from '../hooks/use-axios';
import EditBookForm from '../components/forms/EditBookForm';
import Header from '../layout/Header';
import LoadingSpinner from '../shared/LoadingSpinner';
import useMediaQuery from '@mui/material/useMediaQuery';

interface IBooksAddEditProps {}

const BooksAddEdit: React.FC<IBooksAddEditProps> = () => {
    const { id } = useParams<string>();
    const { sendRequest, isLoading, error, handleClearError } = useAxios();
    const [fetchedBook, setFetchedBook] = useState<IBook>();
    const queries = useMediaQuery('(min-width:769px)');

    const isEditPage = id !== 'add';

    useEffect(() => {
        const fetchBookById = async () => {
            try {
                const response = await sendRequest({ url: `books/${id}` });
                if (response?.status === 200) {
                    setFetchedBook(response.data);
                }
            } catch (error) {}
        };
        if (id !== 'add') {
            fetchBookById();
        }
    }, [id, sendRequest]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <Box
            sx={{
                maxWidth: '1024px',
                margin: 'auto'
            }}
        >
            <Header
                isEditAddPage
                title={isEditPage ? 'Edit Boook' : 'Add Book'}
            />
            <Box
                sx={{
                    width: queries ? '60%' : '100%',
                    padding: '20px 80px'
                }}
            >
                {fetchedBook && isEditPage ? (
                    <EditBookForm book={fetchedBook} />
                ) : (
                    <Box component="h1">
                        Something went worng, can show book details
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default BooksAddEdit;
