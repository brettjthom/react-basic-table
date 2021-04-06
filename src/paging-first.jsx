/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import PagingNumber from './paging-number';

export default class PagingFirst extends React.Component {
  constructor(props) {
    super(props);

    const { setPage } = this.props;
    this._setPage = setPage.bind(this);

    this.state = {};
  }

  render() {
    const { numPages, page } = this.props;

    if (numPages === 0) return null;
    return (
      <PagingNumber
        key={1}
        page={page}
        index={1}
        numPages={numPages}
        setPage={this._setPage}
      />
    );
  }
}

PagingFirst.defaultProps = {
  page: 1,
  numPages: 1,
  setPage: { function() {} },
};
PagingFirst.propTypes = {
  page: PropTypes.number,
  numPages: PropTypes.number,
  setPage: PropTypes.func,
};
