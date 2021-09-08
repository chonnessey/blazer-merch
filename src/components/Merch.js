import React from "react";
import PropTypes from "prop-types";

function Merch(props) {
  return (
    <>
      <h3>
        {props.name} - {props.description}
      </h3>
      <p>
        <em>{props.quantity}</em>
      </p>
      <hr />
    </>
  );
}

Merch.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
};

export default Merch;
