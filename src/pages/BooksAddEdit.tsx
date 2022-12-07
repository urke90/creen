import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';

import { IBook } from '../ts/books';
import { useAxios } from '../hooks/use-axios';
import Header from '../layout/Header';
import Input from '../shared/form/Input';
import useMediaQuery from '@mui/material/useMediaQuery';

interface IBooksAddEditProps {}

const BooksAddEdit: React.FC<IBooksAddEditProps> = () => {
    const { id } = useParams<string>();
    const { sendRequest, isLoading, error, handleClearError } = useAxios();
    const [fetchedBook, setFetchedBook] = useState<IBook>({
        title: '',
        dateOfBirthAuthor: '',
        id: 0,
        isbn: 0,
        nameOfAuthor: '',
        numOfPages: 0,
        quantity: 0,
        yearOfBublishing: 0,
        coverPhoto: ''
    });
    const queries = useMediaQuery('(min-width:769px)');

    const isEditPage = id !== 'add';

    useEffect(() => {
        const fetchBookById = async () => {
            try {
                const response = await sendRequest({ url: `books/${id}` });
                console.log('response', response);
                if (response?.status === 200) {
                    setFetchedBook(response.data);
                }
            } catch (error) {}
        };
        if (id !== 'add') {
            fetchBookById();
        }
    }, [id, sendRequest]);

    const {
        title,
        coverPhoto,
        nameOfAuthor,
        dateOfBirthAuthor,
        numOfPages,
        yearOfBublishing,
        quantity
    } = fetchedBook;

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
            <Box sx={{ width: queries ? '60%' : '100%', padding: '20px 80px' }}>
                <Input
                    fullWidth
                    label="Title"
                    defaultValue={isEditPage && title ? title : ''}
                />
                <Input
                    fullWidth
                    label="Author"
                    defaultValue={
                        isEditPage && nameOfAuthor ? nameOfAuthor : ''
                    }
                />
                <Input
                    fullWidth={queries ? false : true}
                    label="Date of birth (Author)"
                    defaultValue={
                        isEditPage && dateOfBirthAuthor ? dateOfBirthAuthor : ''
                    }
                />
                <Input
                    fullWidth={queries ? false : true}
                    label="Number of pages"
                    defaultValue={isEditPage && numOfPages ? numOfPages : ''}
                />
                <Input
                    fullWidth={queries ? false : true}
                    label="Year of publishing"
                    defaultValue={yearOfBublishing ? yearOfBublishing : ''}
                />
                <Input
                    fullWidth={queries ? false : true}
                    label="Quantity"
                    defaultValue={quantity ? quantity : 0}
                />
                <Input
                    label="Cover photo"
                    fullWidth={queries ? false : true}
                    defaultValue={isEditPage && coverPhoto ? coverPhoto : ''}
                    isUploadImage
                />
            </Box>
        </Box>
    );
};

export default BooksAddEdit;
