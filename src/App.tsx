import { useEffect } from 'react';

import axios from './api/axios.config';

import './App.scss';

const App = () => {
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.request({
                    url: 'https://book-store.mvsoft.co.rs/books',
                    method: 'get'
                });
                console.log('response', response);
            } catch (error) {}
        };
        fetchBooks();
    }, []);

    return <div className="app">testing initi</div>;
};

export default App;
