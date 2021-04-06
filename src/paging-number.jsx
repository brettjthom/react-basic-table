/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class PagingNumber extends React.Component {
  constructor(props) {
    super(props);

    this._setPage = this.setPage.bind(this);

    this.state = {};
  }

  setPage(p, e) {
    const { page, numPages, setPage } = this.props;
    if (p === page
            || p < 1
            || p > numPages
            || p === page) {
      return;
    }
    setPage(p);
    e.preventDefault();
  }

  render() {
    const { page, index } = this.props;
    const numberClassName = classNames('paginate_button', 'paging-number',
      { disabled: page === index });
    return (
      <li key={`paging${index}`} className={numberClassName}>
        <a
          href="#"
          onClick={(e) => this._setPage(index, e)}
        >
          {index}
        </a>
      </li>
    );
  }
}

PagingNumber.defaultProps = {
  page: 1,
  index: 1,
  numPages: 1,
  setPage: { function() {} },
};
PagingNumber.propTypes = {
  page: PropTypes.number,
  index: PropTypes.number,
  numPages: PropTypes.number,
  setPage: PropTypes.func,
};
