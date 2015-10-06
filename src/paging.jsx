'use strict';

import classNames from 'classNames';

export default class SimpleTablePaging extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            numPages: 1
        }
    }

    nextPage(e) {
        if (this.props.page < this.props.numPages && this.props.numPages > 0)
            this.props.setPage(this.props.page + 1);
       	e.preventDefault();
    }

    previousPage(e) {
		if (this.props.page > 1)
			this.props.setPage(this.props.page - 1);
		e.preventDefault();
    }

    setPage(page, e) {
		this.props.setPage(page);
		e.preventDefault();
    }

    render() {
    	var previousClass = classNames("paginate_button", "previous", { "disabled": this.props.page == 1 });
        var nextClass = classNames("paginate_button", "next", { "disabled": this.props.page == this.props.numPages || this.props.numPages == 0 });

        // Create individual numbers
        var i = 1;
        var pagingNumbers = [];
        var lastNumberAdded = null;
        for (i = 1; i <= this.props.numPages; i++){
        	if (i !== 1 && i !== this.props.numPages && Math.abs(i-this.props.page) > 2) continue;

        	var numberClassName = classNames("paginate_button", {"disabled": this.props.page == i});
        	if (lastNumberAdded !== null && lastNumberAdded !== i - 1)
	        	pagingNumbers.push(
		            <li key={"paging-...-" + i} className="paginate_button disabled">
		                <a href="#" onClick={this.setPage.bind(this, i)}>...</a>
		            </li>
	            );

        	pagingNumbers.push(
	            <li key={"paging-" + i} className={numberClassName}>
	                <a href="#" onClick={this.setPage.bind(this, i)}>{i}</a>
	            </li>
            );

            lastNumberAdded = i;
        }

        var paging =
            <ul className="pagination">
                <li key="paging-previous" className={previousClass}>
                    <a href="#" onClick={this.previousPage.bind(this)}>Previous</a>
                </li>
                {pagingNumbers}
                <li key="paging-next" className={nextClass}>
                    <a href="#" onClick={this.nextPage.bind(this)}>Next</a>
                </li>
            </ul>
    	return (
                <div className="row">
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
