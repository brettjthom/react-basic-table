/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import PagingNext from './paging-next';
import PagingPrevious from './paging-previous';
import PagingNumber from './paging-number';
import PagingFirst from './paging-first';
import PagingLast from './paging-last';
import PagingEllipsesLeft from './paging-ellipses-left';
import PagingEllipsesRight from './paging-ellipses-right';

export default class PagingMain extends React.Component {
  constructor(props) {
    super(props);

    const { setPage } = this.props;

    this._setPage = setPage.bind(this);

    this.state = {};
  }

  render() {
    const { page, numPages } = this.props;

    let i = 1;
    const pagingNumbers = [];

    // Create individual numbers
    for (i = page - 2; i <= page + 2; i += 1) {
      if (!(i < 2 || i > numPages - 1)) {
        pagingNumbers.push(
          <PagingNumber
            key={i}
            page={page}
            index={i}
            numPages={numPages}
            setPage={this._setPage}
          />,
        );
      }
    }

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="dataTables_paginate paging_simple_numbers">
            <ul className="pagination">
              <PagingPrevious
                page={page}
                numPages={numPages}
                setPage={this._setPage}
              />
              <PagingFirst
                page={page}
                numPages={numPages}
                setPage={this._setPage}
              />
              <PagingEllipsesLeft
                page={page}
              />
              {pagingNumbers}
              <PagingEllipsesRight
                page={page}
                numPages={numPages}
              />
              <PagingLast
                page={page}
                numPages={numPages}
                setPage={this._setPage}
              />
              <PagingNext
                page={page}
                numPages={numPages}
                setPage={this._setPage}
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

PagingMain.defaultProps = {
  page: 1,
  numPages: 1,
  setPage: { function() {} },
};
PagingMain.propTypes = {
  page: PropTypes.number,
  numPages: PropTypes.number,
  setPage: PropTypes.func,
};
