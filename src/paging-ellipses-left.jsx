import React, { PropTypes } from 'react';

export default class PagingEllipsesLeft extends React.Component {
    render() {
        if (this.props.page <= 3) {
            return null;
        }
        return (
            <li key={'paging-ellipses-left'}
              className="paginate_button disabled"
            >
                <a href="#" onClick={(e) => { e.preventDefault(); }}>...</a>
            </li>
        );
    }
}

PagingEllipsesLeft.defaultProps = {
    page: 1,
    numPages: 1,
};
PagingEllipsesLeft.propTypes = {
    page: PropTypes.number,
    numPages: PropTypes.number,
};