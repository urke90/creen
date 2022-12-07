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

interface IRowBook {
    book: IBook;
    onDeleteBook: (id: number) => void;
}

const Row: React.FC<IRowBook> = ({ book, onDeleteBook }) => {
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
                <TableCell>
                    <Box
                        component="div"
                        sx={{
                            height: '100px',
                            width: '100px'
                        }}
                    >
                        <img
                            src={coverPhoto}
                            alt={title}
                            width={100}
                            height={100}
                        />
                    </Box>
                </TableCell>
                <TableCell align="center">{title}</TableCell>
                <TableCell size="medium" align="center">
                    {nameOfAuthor}
                </TableCell>
                <TableCell align="center">{yearOfBublishing}</TableCell>
                <TableCell align="center">{numOfPages}</TableCell>
                <TableCell align="center">{quantity}</TableCell>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }}>
                    <BookMenu
                        bookId={id}
                        title={title}
                        onDeleteBook={onDeleteBook}
                    />
                </TableCell>
            </TableRow>
        </>
    );
};

interface IBooksTable {
    books: IBook[];
    onDeleteBook: (id: number) => void;
}

const BooksTable: React.FC<IBooksTable> = ({ books, onDeleteBook }) => {
    console.log('books IN TABLE', books);

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
                    {books.length
                        ? books.map((book) => (
                              <Row
                                  key={book.id}
                                  book={book}
                                  onDeleteBook={onDeleteBook}
                              />
                          ))
                        : null}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BooksTable;
