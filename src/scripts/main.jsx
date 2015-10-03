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

SimpleTable.defaultProps = { rows: [], columns: [], pageSize: 10 }