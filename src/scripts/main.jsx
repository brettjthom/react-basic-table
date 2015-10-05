class SimpleTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            numPages: 1,
            displayRows: []
        }
    }

    componentWillReceiveProps(nextProps) {
        // Filter if you receive the filer prop
        var displayRows = nextProps.rows;
        if (nextProps.filter.length > 0 && nextProps.rows.length > 0)
            displayRows= filterTable(nextProps.rows, nextProps.filter);
        this.setState({ displayRows: displayRows });
        this.setState({ numPages: Math.ceil(displayRows.length / nextProps.pageSize) });
        this.setState({ page: 1 });
    }

    componentWillMount() {
        // Filter if you receive the filer prop
        var displayRows = this.props.rows;
        if (this.props.filter.length > 0 && this.props.rows.length > 0) 
            displayRows= filterTable(this.props.rows, this.props.filter);
        this.setState({ displayRows: displayRows });
        this.setState({ numPages: Math.ceil(displayRows.length / this.props.pageSize) });
        this.setState({ page: 1 });
    }

    setPage(newPage) {
        this.setState({ page: newPage });
    }

    render() {
        var $component = this;
        var headers = this.props.columns.map(function (header, index) {
            return (
                <th key={"header" + index}>{header}</th>
            );
        });
        var rows = this.state.displayRows.map(function (row, index) {
            if (index < ($component.state.page - 1) * $component.props.pageSize) return null;
            if (index >= ($component.state.page) * $component.props.pageSize) return null;
            // Check for keys on the individual tds on the row
            // Need to figure this out later
            /*
            row.forEach(function(td, tdIndex) {
                if (td.key == null) {
                    td.key = "row" + index + "item" + tdIndex;
                }
            });
            */
            return(
              <tr key={"row" + index}>
                  {row}
              </tr>  
            );
        });

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
                <SimpleTablePaging numPages={this.state.numPages} page={this.state.page} setPage={this.setPage.bind(this)} />
            </div>
        );
    }
}

SimpleTable.defaultProps = { rows: [], columns: [], pageSize: 10, filter: [] }