import React from 'react';
import PropTypes from 'prop-types';
import PagingNumber from './paging-number';

export default class PagingLast extends React.Component {
    render() {
        return (
            <PagingNumber key={this.props.numPages}
              page={this.props.page}
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