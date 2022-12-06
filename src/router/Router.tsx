import { createBrowserRouter, Navigate } from 'react-router-dom';

import Books from '../pages/Books';
import BooksAddEdit from '../pages/BooksAddEdit';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Books />
    },
    {
        path: '/book/:id',
        element: <BooksAddEdit />
    },
    {
        path: '*',
        element: <Navigate to="/" />
    }
]);
