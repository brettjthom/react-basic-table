class SimpleTablePaging extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            numPages: 1
        }
    }

    nextPage() {
        if (this.props.page < this.props.numPages)
            this.props.setPage(this.props.page + 1);
    }

    previousPage() {
		if (this.props.page > 1)
			this.props.setPage(this.props.page - 1);
    }

    render() {
    	var previousClass = classNames("paginate_button", "previous", { "disabled": this.props.page == 1 });
        var nextClass = classNames("paginate_button", "next", { "disabled": this.props.page == this.props.numPages });
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
                <div classNameName="row">
                    <div className="col-xs-12">
                        <div className="dataTables_paginate paging_simple_numbers">
                            {paging}
                        </div>
                    </div>
                </div>
    	);
    }
}

SimpleTablePaging.defaultProps = { page: 1, pageNum: 1, setPage: {function(){}} }