import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../shared/form/Input';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useAxios } from '../../hooks/use-axios';
import { IBook } from '../../ts/books';
import LoadingSpinner from '../../shared/LoadingSpinner';

const AddBookForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [nameOfAuthor, setNameOfAuthor] = useState('');
    const [numberOfPages, setnumberOfPages] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [dateOfBirthAuthor, setdateOfBirthAuthor] = useState('');
    const [yearOfPublishing, setYearOfPublishing] = useState(0);
    const { sendRequest, isLoading } = useAxios();
    const navigate = useNavigate();

    const queries = useMediaQuery('(min-width:769px)');

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            isbn: Math.floor(Math.random() * 1000000 + 1),
            title,
            nameOfAuthor,
            numberOfPages,
            yearOfPublishing,
            quantity,
            dateOfBirthAuthor,
            coverPhoto: 'asdsada'
        };

        try {
            const response = await sendRequest({
                url: 'books',
                data,
                method: 'POST'
            });

            if (response?.status === 201) {
                navigate('/');
            }
        } catch (error) {}
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <Input
                fullWidth
                label="Title"
                defaultValue={title}
                onChange={(
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => setTitle(e.target.value)}
            />
            <Input
                fullWidth
                label="Author"
                defaultValue={nameOfAuthor}
                onChange={(
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => setNameOfAuthor(e.target.value)}
            />
            <Input
                fullWidth={queries ? false : true}
                label="Date of birth (Author)"
                defaultValue={dateOfBirthAuthor}
                onChange={(
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => setdateOfBirthAuthor(e.target.value)}
            />
            <Input
                fullWidth={queries ? false : true}
                label="Number of pages"
                defaultValue={numberOfPages}
                type="number"
                onChange={(
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => setnumberOfPages(Number(e.target.value))}
            />
            <Input
                fullWidth={queries ? false : true}
                label="Year of publishing"
                defaultValue={yearOfPublishing}
                type="number"
                onChange={(
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => setYearOfPublishing(Number(e.target.value))}
            />
            <Input
                fullWidth={queries ? false : true}
                label="Quantity"
                defaultValue={quantity}
                type="number"
                onChange={(
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => setQuantity(Number(e.target.value))}
            />
            <Input
                label="Cover photo"
                fullWidth={queries ? false : true}
                defaultValue=""
                isUploadImage
                readOnly
            />
            <Box>
                <Button type="submit" variant="contained">
                    SAVE BOOK
                </Button>
            </Box>
        </form>
    );
};
export default AddBookForm;
