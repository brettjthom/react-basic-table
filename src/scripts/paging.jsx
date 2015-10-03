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
       	return false;
    }

    previousPage() {
		if (this.props.page > 1)
			this.props.setPage(this.props.page - 1);
		return false;
    }

    setPage(page) {
		this.props.setPage(page);
		return false;
    }

    render() {
    	var previousClass = classNames("paginate_button", "previous", { "disabled": this.props.page == 1 });
        var nextClass = classNames("paginate_button", "next", { "disabled": this.props.page == this.props.numPages });

        // Create individual numbers
        var i = 1;
        var pagingNumbers = [];
        var lastNumberAdded = null;
        for (i = 1; i <= this.props.numPages; i++){
        	if (i !== 1 && i !== this.props.numPages && Math.abs(i-this.props.page) > 2) continue;

        	var numberClassName = classNames("paginate_button", {"disabled": this.props.page == i});
        	if (lastNumberAdded !== null && lastNumberAdded !== i - 1)
	        	pagingNumbers.push(
		            <li className="paginate_button disabled">
		                <a href="#" onClick={this.setPage.bind(this, i)}>...</a>
		            </li>
	            );    

        	pagingNumbers.push(
	            <li className={numberClassName}>
	                <a href="#" onClick={this.setPage.bind(this, i)}>{i}</a>
	            </li>
            );
            
            lastNumberAdded = i;
        }

        var paging = 
            <ul className="pagination">
                <li className={previousClass}>
                    <a href="#" onClick={this.previousPage.bind(this)}>Previous</a>
                </li>
                {pagingNumbers}
                <li className={nextClass}>
                    <a href="#" onClick={this.nextPage.bind(this)}>Next</a>
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