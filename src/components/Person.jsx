import React from "react";
import PropTypes from "prop-types";

function Person(props) {
    return (
        <div>
            <style jsx>
                {`
          p {
            margin-left: 30px;
          }
        `}
            </style>
            <h2>{props.name}</h2>
            <p>{props.years}</p>
            <p>{props.bio}</p>
            <img src={props.img} />
        </div>
    );
}

Person.propTypes = {
    name: PropTypes.string.isRequired,
    years: PropTypes.arrayOf(Number).isRequired,
    bio: PropTypes.string.isRequired,
    img: PropTypes.string
};

export default Person;
