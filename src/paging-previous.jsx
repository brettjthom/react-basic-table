/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class PagingPrevious extends React.Component {
  constructor(props) {
    super(props);

    this._previousPage = this.previousPage.bind(this);

    this.state = {};
  }

  previousPage(e) {
    const { page, setPage } = this.props;
    if (page > 1) {
      setPage(page - 1);
    }
    e.preventDefault();
  }

  render() {
    const { numPages, page } = this.props;
    const previousClass = classNames('paginate_button', 'previous',
      { disabled: page === 1 || numPages === 0 });

    return (
      <li key="paging-previous" className={previousClass}>
        <a href="#" onClick={this._previousPage}>Previous</a>
      </li>
    );
  }
}

PagingPrevious.defaultProps = {
  page: 1,
  numPages: 1,
  setPage: { function() {} },
};
PagingPrevious.propTypes = {
  page: PropTypes.number,
  numPages: PropTypes.number,
  setPage: PropTypes.func,
};
