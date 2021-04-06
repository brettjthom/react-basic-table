/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class PagingNext extends React.Component {
  constructor(props) {
    super(props);

    this._nextPage = this.nextPage.bind(this);

    this.state = {};
  }

  nextPage(e) {
    const { page, numPages, setPage } = this.props;
    if (page < numPages) {
      setPage(page + 1);
    }
    e.preventDefault();
  }

  render() {
    const { page, numPages } = this.props;
    const nextClass = classNames('paginate_button', 'next',
      { disabled: page === numPages || numPages === 0 });

    return (
      <li key="paging-next" className={nextClass}>
        <a href="#" onClick={this._nextPage}>Next</a>
      </li>
    );
  }
}

PagingNext.defaultProps = {
  page: 1,
  numPages: 1,
  setPage: { function() {} },
};
PagingNext.propTypes = {
  page: PropTypes.number,
  numPages: PropTypes.number,
  setPage: PropTypes.func,
};
