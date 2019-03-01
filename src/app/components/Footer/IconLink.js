import React from 'react';
import PropTypes from 'prop-types';

function IconLink(props) {
  const { href, target, icon: Icon } = props;

  return (
    <a href={href} target={target} rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

IconLink.defaultProps = {
  target: '_blank',
};

export default IconLink;
