import React, { PropTypes } from 'react';
import PagingNumber from './paging-number';

export default class PagingLast extends React.Component {
    render() {
        if (this.props.numPages <= this.props.page + 2) {
            return null;
        }
        return (
            <PagingNumber page={this.props.page}
              index={this.props.numPages}
              numPages={this.props.numPages}
              setPage={this.props.setPage.bind(this)}
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