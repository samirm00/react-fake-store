import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Fruits from './components/Fruits';
import Laptops from './components/Laptops';
import Phones from './components/Phones';

const App = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="fruits" element={<Fruits />} />
                <Route path="phone" element={<Phones />} />
                <Route path="laptop" element={<Laptops />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
