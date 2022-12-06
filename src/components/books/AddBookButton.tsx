import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { grey, green } from '@mui/material/colors';
import React from 'react';

interface IAddBookButtonProps {}

const AddBookButton: React.FC<IAddBookButtonProps> = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                left: '25px',
                top: '70px',
                padding: '20px',
                border: `3px solid ${grey[300]}`,
                borderRadius: '50%',
                width: '70px',
                height: '70px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff'
            }}
        >
            <Link
                style={{
                    textDecoration: 'none',
                    color: green[300]
                }}
                to="book/add-edit"
                className="add-book-link"
            >
                <Box
                    sx={{
                        textDecoration: 'none',
                        fontSize: '26px'
                    }}
                >
                    +
                </Box>
            </Link>
        </Box>
    );
};
export default AddBookButton;
