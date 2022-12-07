import { useParams } from 'react-router-dom';

import Header from '../layout/Header';
import { Box } from '@mui/system';

interface IBooksAddEditProps {}

const BooksAddEdit: React.FC<IBooksAddEditProps> = () => {
    const { id } = useParams<string>();

    console.log('params', id);

    const isAddPage = id === 'add';

    return (
        <Box
            sx={{
                maxWidth: '1024px',
                margin: 'auto'
            }}
        >
            <Header
                isEditAddPage
                title={isAddPage ? 'Add Boook' : 'Edit Book'}
            />
            <Box sx={{ border: '1px solid red', width: '50%' }}>Init</Box>
        </Box>
    );
};

export default BooksAddEdit;
