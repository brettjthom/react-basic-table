import React from 'react';
import PropTypes from 'prop-types';

export default class PagingEllipsesRight extends React.Component {
    render() {
        if (this.props.numPages <= this.props.page + 3) {
            return null;
        }
        return (
            <li key={'paging-ellipses-right'}
              className="paginate_button disabled"
            >
                <a href="#" onClick={(e) => { e.preventDefault(); }}>...</a>
            </li>
        );
    }
}

PagingEllipsesRight.defaultProps = {
    page: 1,
    numPages: 1,
};
PagingEllipsesRight.propTypes = {
    page: PropTypes.number,
    numPages: PropTypes.number,
};