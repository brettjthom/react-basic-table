"use strict";

class SimpleTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            numPages: 1
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ numPages: Math.ceil(nextProps.rows.length / nextProps.pageSize) });
    }

    componentWillMount() {
        this.setState({ numPages: Math.ceil(this.props.rows.length / this.props.pageSize) });
    }

    nextPage() {
        if (this.state.page < this.state.numPages)
            this.setState({ page: (this.state.page + 1) });
    }

    previousPage() {
        if (this.state.page > 1)
            this.setState({ page: (this.state.page - 1) });
    }

    setPage(newPage) {
        this.setState({ page: newPage });
    }

    render() {
        var $component = this;
        var headers = this.props.columns.map(function (header) {
            return (
                <th>{header}</th>
            );
        });
        var rows = this.props.rows.map(function (row, index) {
            if (index < ($component.state.page - 1) * $component.props.pageSize) return null;
            if (index >= ($component.state.page) * $component.props.pageSize) return null;
            return(
              <tr>
                  {row}
              </tr>  
            );
        });

        var previousClass = classNames("paginate_button", "previous", { "disabled": this.state.page == 1 });
        var nextClass = classNames("paginate_button", "next", { "disabled": this.state.page == this.state.numPages });
        var paging = 
            <ul className="pagination">
                <li className={previousClass} onClick={this.previousPage.bind(this)}>
                    <a href="#">Previous</a>
                </li>
                <li className={nextClass} onClick={this.nextPage.bind(this)}>
                    <a href="#">Next</a>
                </li>
            </ul>
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    {headers}
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div classNameName="row">
                    <div className="col-xs-12">
                        <div className="dataTables_paginate paging_simple_numbers">
                            {paging}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SimpleTable.defaultProps = { rows: [], columns: [], pageSize: 5 }