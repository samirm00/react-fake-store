import PropTypes from 'prop-types';

import './Fruit.css';

const Fruit = ({ fruit }) => {
    return (
        <div className="fruit-container">
            <h2>{fruit.title}</h2>
            <div>
                <img src={fruit.images[0]} alt="" />
            </div>
            <p>{fruit.description}</p>
        </div>
    );
};

Fruit.propTypes = {
    fruit: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired
    })
};

export default Fruit;
