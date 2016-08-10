const React = require('react');
const _ = require('underscore');
const SimpleTablePaging = require('./paging.jsx');
const filterTable = require('./filtering.jsx');
const sortTable = require('./sorting.jsx');

export default class SimpleTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            numPages: 1,
            displayRows: [],
            sortedBy: {},
        };
    }

    componentWillMount() {
        // Filter if you receive the filer prop
        let displayRows = this.props.rows;
        if (this.props.filter.length > 0 && this.props.rows.length > 0) {
            displayRows = filterTable(this.props.rows, this.props.filter, this.props.filterMode);
        }
        this.setState({ displayRows });
        this.setState({ numPages: Math.ceil(displayRows.length / this.props.pageSize) });
        this.setState({ page: 1 });
    }

    componentWillReceiveProps(nextProps) {
        // Filter if you receive the filer prop
        let displayRows = nextProps.rows;
        if (nextProps.filter.length > 0 && nextProps.rows.length > 0) {
            displayRows = filterTable(nextProps.rows, nextProps.filter, nextProps.filterMode);
        }
        this.setState({ displayRows });
        this.setState({ numPages: Math.ceil(displayRows.length / nextProps.pageSize) });
        if (!_.isEqual(this.props.filter, nextProps.filter)) {
            this.setState({ page: 1 });
        }
    }

    setPage(newPage) {
        this.setState({ page: newPage });
    }

    sortColumn(index) {
        if (this.state.sortedBy.column !== index) {
            this.setState({ sortedBy: { column: index, mode: 'Asc' } });
        } else {
            this.setState({ sortedBy: {
                column: index,
                mode: this.state.sortedBy.mode === 'Asc' ? 'Desc' : 'Asc' } });
        }
    }

    render() {
        let items;
        const headers = this.props.columns.map((header, index) => {
            if (this.props.sort.indexOf(index) === -1) {
                return (
                    <th key={`header${index}`}
                      style={this.props.hideColumns.indexOf(index) !== -1 ?
                            { display: 'none' } : {}}
                    >
                        {header}
                    </th>
                );
            }
            return (
                <th key={`header${index}`}
                  style={this.props.hideColumns.indexOf(index) !== -1 ?
                        { display: 'none' } : {}} onClick={this.sortColumn.bind(this, index)}
                >
                    {header}
                </th>
            );
        });

        let rows = sortTable(this.state.displayRows, this.state.sortedBy).map((row, index) => {
            if (index < (this.state.page - 1) * this.props.pageSize) {
                return null;
            }
            if (index >= (this.state.page) * this.props.pageSize) {
                return null;
            }

            items = row.map((td, tdIndex) => {
                return (
                    <td key={`row${index}item${tdIndex}`}
                      style={this.props.hideColumns.indexOf(tdIndex) !== -1 ?
                            { display: 'none' } : {}}
                    >
                        {td}
                    </td>
                );
            });
            return (
                <tr key={`row${index}`}>
                    {items}
                </tr>
            );
        });


        if (rows.length === 0) {
            rows =
                (<tr key={"rowempty"}>
                    <td valign="top" colSpan={headers.length} className="dataTables_empty">
                        No matching records found.
                    </td>
                </tr>);
        }

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
                <SimpleTablePaging numPages={this.state.numPages}
                  page={this.state.page}
                  setPage={this.setPage.bind(this)}
                />
            </div>
        );
    }
}

SimpleTable.defaultProps = {
    rows: [],
    columns: [],
    pageSize: 10,
    hideColumns: [],
    filter: [],
    sort: [],
    filterMode: 'Or',
};

SimpleTable.propTypes = {
    rows: React.PropTypes.array,
    columns: React.PropTypes.array,
    pageSize: React.PropTypes.number,
    hideColumns: React.PropTypes.array,
    filter: React.PropTypes.array,
    sort: React.PropTypes.array,
    filterMode: React.PropTypes.string,
};

module.exports = SimpleTable;
