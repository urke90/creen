import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import BookMenu from './BookMenu';

import { IBook } from '../../ts/books';

interface IBooksTable {
    books: IBook[];
}

const Row: React.FC<{ book: IBook }> = ({ book }) => {
    const {
        title,
        nameOfAuthor,
        yearOfBublishing,
        coverPhoto,
        numOfPages,
        quantity,
        id
    } = book;

    return (
        <>
            <TableRow
                sx={{
                    '& > *': {
                        borderBottom: 'unset'
                    }
                }}
            >
                <TableCell colSpan={0}>
                    <Box
                        component="img"
                        sx={{
                            height: '100px',
                            width: '100px'
                        }}
                        alt={coverPhoto}
                        src={coverPhoto}
                    />
                </TableCell>
                <TableCell align="center">{title}</TableCell>
                <TableCell align="center">{nameOfAuthor}</TableCell>
                <TableCell align="center">{yearOfBublishing}</TableCell>
                <TableCell align="center">{numOfPages}</TableCell>
                <TableCell align="center">{quantity}</TableCell>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <BookMenu bookId={id} title={title} />
                </TableCell>
            </TableRow>
        </>
    );
};

const BooksTable: React.FC<IBooksTable> = ({ books }) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell align="center" size="medium">
                            Title
                        </TableCell>
                        <TableCell size="medium" align="center">
                            Author
                        </TableCell>
                        <TableCell align="center" size="medium">
                            Year
                        </TableCell>
                        <TableCell align="center" size="medium">
                            Pages
                        </TableCell>
                        <TableCell align="center" size="medium">
                            Quantity
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books.length > 0
                        ? books.map((book) => <Row key={book.id} book={book} />)
                        : null}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BooksTable;
