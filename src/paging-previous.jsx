import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class PagingPrevious extends React.Component {
    previousPage(e) {
        if (this.props.page > 1) {
            this.props.setPage(this.props.page - 1);
        }
        e.preventDefault();
    }

    render() {
        const previousClass = classNames('paginate_button', 'previous',
            { disabled: this.props.page === 1 });

        return (
            <li key="paging-previous" className={previousClass}>
                <a href="#" onClick={this.previousPage.bind(this)}>Previous</a>
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