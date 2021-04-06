/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import PagingNumber from './paging-number';

export default class PagingLast extends React.Component {
  constructor(props) {
    super(props);

    const { setPage } = this.props;
    this._setPage = setPage.bind(this);

    this.state = {};
  }

  render() {
    const { numPages, page } = this.props;

    if (numPages === 0 || numPages === 1) return null;
    return (
      <PagingNumber
        key={numPages}
        page={page}
        index={numPages}
        numPages={numPages}
        setPage={this._setPage}
      />
    );
  }
}

PagingLast.defaultProps = {
  page: 1,
  numPages: 1,
  setPage: { function() {} },
};
PagingLast.propTypes = {
  page: PropTypes.number,
  numPages: PropTypes.number,
  setPage: PropTypes.func,
};
