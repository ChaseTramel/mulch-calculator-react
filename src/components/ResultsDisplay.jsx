import React from 'react';
import PropTypes from 'prop-types';

function ResultsDisplay({ length, width, depth, bagSize, bagPrice, result }) {
    return (
        <div>
            <p>Thank you for using our calculator. </p>
            <p>You said your space is {length} feet long, {width} feet wide, and {depth} inches deep. </p>
            <p>The volume of that space is {result.volume} cubic yards. </p>
            <p>You need to buy {result.bags} bag(s), as they cover {bagSize} cubic yards each. </p>
            <p>At ${bagPrice} a bag, this will cost ${result.price}.</p>
        </div>
    );
}

ResultsDisplay.propTypes = {
    length: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    depth: PropTypes.number.isRequired,
    bagSize: PropTypes.number.isRequired,
    bagPrice: PropTypes.number.isRequired,
    result: PropTypes.number.isRequired
  };

export default ResultsDisplay;