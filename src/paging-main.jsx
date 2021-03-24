import React from 'react';
import PropTypes from 'prop-types';
import PagingNext from './paging-next';
import PagingPrevious from './paging-previous';
import PagingNumber from './paging-number';
import PagingFirst from './paging-first';
import PagingLast from './paging-last';
import PagingEllipsesLeft from './paging-ellipses-left';
import PagingEllipsesRight from './paging-ellipses-right';

export default class PagingMain extends React.Component {
    constructor(props) {
        super(props);

        this.setPage = this.props.setPage.bind(this);
    }

    render() {
        let i = 1;
        const pagingNumbers = [];

        // Create individual numbers
        for (i = this.props.page - 2; i <= this.props.page + 2; i++) {
            if (i < 2 || i > this.props.numPages - 1) {
                continue;
            }

            pagingNumbers.push(
                <PagingNumber key={i}
                  page={this.props.page}
                  index={i}
                  numPages={this.props.numPages}
                  setPage={this.setPage}
                />,
            );
        }

        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="dataTables_paginate paging_simple_numbers">
                        <ul className="pagination">
                            <PagingPrevious page={this.props.page}
                              numPages={this.props.numPages}
                              setPage={this.setPage}
                            />
                            <PagingFirst page={this.props.page}
                              numPages={this.props.numPages}
                              setPage={this.setPage}
                            />
                            <PagingEllipsesLeft page={this.props.page}
                              numPages={this.props.numPages}
                            />
                            {pagingNumbers}
                            <PagingEllipsesRight page={this.props.page}
                              numPages={this.props.numPages}
                            />
                            <PagingLast page={this.props.page}
                              numPages={this.props.numPages}
                              setPage={this.setPage}
                            />
                            <PagingNext page={this.props.page}
                              numPages={this.props.numPages}
                              setPage={this.setPage}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

PagingMain.defaultProps = {
    page: 1,
    numPages: 1,
    setPage: { function() {} },
};
PagingMain.propTypes = {
    page: PropTypes.number,
    numPages: PropTypes.number,
    setPage: PropTypes.func,
};