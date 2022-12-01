import { useEffect } from 'react';

import axios from './api/axios.config';
import { useAxios } from './hooks/use-axios';

import './App.scss';

const App = () => {
    const { sendRequest } = useAxios();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await sendRequest({
                    url: 'books',
                    method: 'GET'
                });
                console.log('response', response);
            } catch (error) {}
        };
        fetchBooks();
    }, [sendRequest]);

    return <div className="app">testing initi</div>;
};

export default App;
