import PropTypes from 'prop-types';
import React from 'react';

const Hello = props => (
  // eslint-disable-next-line react/destructuring-assignment
  <h1 className="Hello">Hello {props.name || 'World'}</h1>
);

export default Hello;

Hello.propTypes = {
  name: PropTypes.string,
};

Hello.defaultProps = {
  name: 'World',
};
