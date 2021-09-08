import React from "react";
import PropTypes from "prop-types";

function Merch(props) {
  return (
    <>
      <div class="card text-center border-info">
      <div class="card-body">
        <h3 class="card-title">
          {props.name}
        </h3>
        <h5>
          {props.description}
        </h5>
      <p>
        <em>{props.quantity}</em>
      </p>
      <a href="#" class="btn btn-success">Add to Cart</a>
      </div>
      </div>
      
    </>
  );
}

Merch.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
};

export default Merch;
