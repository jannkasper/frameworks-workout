import React from "react";
import PropTypes from "prop-types"

const Product = ({ price, quantity, title }) => (
    <div>
        {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
    </div>
)

Product.propTypes = {
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
    title: PropTypes.string.isRequired
}

export default Product
