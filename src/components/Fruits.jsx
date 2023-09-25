import axios from 'axios';
import { useEffect, useState } from 'react';
import './Fruits.css';

import Loader from './Loader';
import Fruit from './Fruit';

const Fruits = () => {
    const [fruits, setFruits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getFruits = async () => {
            try {
                const res = await axios.get(
                    'https://dummyjson.com/products/category/groceries'
                );
                if (res.status === 200) {
                    setFruits(res.data.products);
                } else {
                    throw new Error(
                        `Failed to fetch fruits with status : ${res.status}`
                    );
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getFruits();
    }, []);

    return (
        <div className="fruits">
            {loading && <Loader />}
            {error && <p>{error}</p>}
            {!error &&
                fruits.map((fruit) => <Fruit key={fruit.id} fruit={fruit} />)}
        </div>
    );
};

export default Fruits;
