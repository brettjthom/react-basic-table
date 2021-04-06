/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

const PagingEllipsesLeft = ({ page }) => {
  if (page <= 4) {
    return null;
  }
  return (
    <li
      key="paging-ellipses-left"
      className="paginate_button disabled"
    >
      <a href="#" onClick={(e) => { e.preventDefault(); }}>...</a>
    </li>
  );
};

PagingEllipsesLeft.defaultProps = {
  page: 1,
};
PagingEllipsesLeft.propTypes = {
  page: PropTypes.number,
};

export default PagingEllipsesLeft;
