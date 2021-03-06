import React from 'react';
import PropTypes from 'prop-types';

function Comment({ text }) {
  return (
    <div style={{ padding: 5, opacity: 0.5 }}>
      {text}
    </div>
  );
}

Comment.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

export default Comment;
