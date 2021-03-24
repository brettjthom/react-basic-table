import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class PagingNumber extends React.Component {
    setPage(page, e) {
        if (page === this.props.page
            || page < 1
            || page > this.props.numPages
            || page === this.props.page) {
            return;
        }
        this.props.setPage(page);
        e.preventDefault();
    }

    render() {
        const numberClassName = classNames('paginate_button', 'paging-number',
            { disabled: this.props.page === this.props.index });
        return (
            <li key={`paging${this.props.index}`} className={numberClassName}>
                <a href="#"
                  onClick={this.setPage.bind(this, this.props.index)}
                >
                    {this.props.index}
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