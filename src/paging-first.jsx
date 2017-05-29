import React, { PropTypes } from 'react';
import PagingNumber from './paging-number';

export default class PagingFirst extends React.Component {
    render() {
        if (this.props.page <= 3) {
            return null;
        }
        return (
            <PagingNumber page={this.props.page}
              index={1}
              numPages={this.props.numPages}
              setPage={this.props.setPage.bind(this)}
            />
        );
    }
}

PagingFirst.defaultProps = {
    page: 1,
    numPages: 1,
    setPage: { function() {} },
};
PagingFirst.propTypes = {
    page: PropTypes.number,
    numPages: PropTypes.number,
    setPage: PropTypes.func,
};