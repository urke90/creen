import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../shared/form/Input';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useAxios } from '../../hooks/use-axios';
import { IBook } from '../../ts/books';
import LoadingSpinner from '../../shared/LoadingSpinner';

interface IEditBookFormProps {
    book: IBook;
}

const EditBookForm: React.FC<IEditBookFormProps> = ({ book }) => {
    const { sendRequest, isLoading } = useAxios();
    const navigate = useNavigate();
    const {
        title,
        nameOfAuthor,
        dateOfBirthAuthor,
        yearOfPublishing,
        numberOfPages,
        quantity,
        coverPhoto,
        id
    } = book;
    const queries = useMediaQuery('(min-width:769px)');
    const [updatedQuantity, setUpdatedQuantity] = useState<number>(quantity);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            quantity: updatedQuantity
        };

        try {
            const response = await sendRequest({
                url: `books/${id}`,
                data,
                method: 'PATCH'
            });

            if (response?.status === 200) {
                navigate('/');
            }
        } catch (error) {}
    };

    const handleChangeQuantity = (value: number) => {
        setUpdatedQuantity(value);
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <Input
                fullWidth
                label="Title"
                readOnly
                defaultValue={title ? title : ''}
            />
            <Input
                fullWidth
                label="Author"
                defaultValue={nameOfAuthor ? nameOfAuthor : ''}
                readOnly
            />
            <Input
                fullWidth={queries ? false : true}
                label="Date of birth (Author)"
                defaultValue={dateOfBirthAuthor ? dateOfBirthAuthor : ''}
                readOnly
            />
            <Input
                fullWidth={queries ? false : true}
                label="Number of pages"
                defaultValue={numberOfPages ? numberOfPages : 0}
                type="text"
                readOnly
            />
            <Input
                fullWidth={queries ? false : true}
                label="Year of publishing"
                defaultValue={yearOfPublishing ? yearOfPublishing : 0}
                type="number"
                readOnly
            />
            <Input
                fullWidth={queries ? false : true}
                label="Quantity"
                defaultValue={updatedQuantity ? updatedQuantity : 0}
                type="number"
                onChange={(
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => handleChangeQuantity(Number(e.target.value))}
            />
            <Input
                label="Cover photo"
                fullWidth={queries ? false : true}
                defaultValue={coverPhoto ? coverPhoto : ''}
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
export default EditBookForm;
