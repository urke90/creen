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

interface IRowBook {
    book: IBook;
}

const Row: React.FC<IRowBook> = ({ book }) => {
    const {
        title,
        nameOfAuthor,
        yearOfBublishing,
        coverPhoto,
        numOfPages,
        quantity,
        id
    } = book;

    console.log('title', title);
    console.log('coverPhoto', coverPhoto);

    return (
        <>
            <TableRow
                sx={{
                    '& > *': {
                        borderBottom: 'unset'
                        //irection: 'row reverse'
                    }
                }}
            >
                <TableCell>
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
                <TableCell component="th" scope="row">
                    {title}
                </TableCell>
                <TableCell size="medium" align="center">
                    {nameOfAuthor}
                </TableCell>
                <TableCell align="center">{yearOfBublishing}</TableCell>
                <TableCell align="center">{numOfPages}</TableCell>
                <TableCell align="center">{quantity}</TableCell>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }}>
                    <BookMenu bookId={id} title={title} />
                </TableCell>
            </TableRow>
        </>
    );
};

const BooksTable: React.FC<IBooksTable> = ({ books }) => {
    console.log('books', books);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell align="center">Title</TableCell>
                        <TableCell align="center">Author</TableCell>
                        <TableCell align="center">Year</TableCell>
                        <TableCell align="center">Pages</TableCell>
                        <TableCell align="center">Quantity</TableCell>
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
