import { useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface IBookMenuProps {
    bookId: number;
    onDeleteBook: (id: number) => void;
}

const BookMenu: React.FC<IBookMenuProps> = ({
    bookId,

    onDeleteBook
}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteBook = () => {
        onDeleteBook(bookId);
        handleClose();
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button'
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleDeleteBook}>Delete</MenuItem>
                <MenuItem onClick={handleClose}>Preview</MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link
                        style={{
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                        to={`/book/${bookId}`}
                    >
                        Edit
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
};

export default BookMenu;
