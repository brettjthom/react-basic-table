import React from 'react';

// Example 1
var columns = ["Name","State","Age","Note"];
var rows = [
	[
		<span>Joe</span>,
		<span>PA</span>,
		<span>22</span>,
	    <input type="text" />
	],
	[
		<span>Jim</span>,
		<span>TX</span>,
		<span>55</span>,
		<input type="text" />
	],
	[
		<span>John</span>,
		<span>NJ</span>,
		<span>34</span>,
		<input type="text" />
	],
	[
		<span>Sam</span>,
		<span>CA</span>,
		<span>68</span>,
		<input type="text" />
	],
	[
		<span>Steve</span>,
		<span>NY</span>,
		<span>12</span>,
		<input type="text" />
	]
]

React.render(
  <SimpleTable columns={columns} rows={rows} />,
  document.getElementById('Example1')
);

// Example 2
var i = 0;
var rows = [];
for (i = 0; i <= 2000; i++){
	var item = [
		<span data-simpletable-value={"Row"+i}>{"Row"+i}</span>,
		<span data-simpletable-value={"Test"+i}>{"Test"+i}</span>,
		<span data-simpletable-value={"Testing"+i}>{"Testing"+i}</span>,
		<span data-simpletable-value={"End"+i}>{"End"+i}</span>
	];

	rows.push(item);
}

React.render(
  <SimpleTable columns={columns} rows={rows} />,
  document.getElementById('Example2')
);

// Example 3
class SimpleTableFilteringExample extends React.Component {
	constructor(props) {
		super(props);
		this.state = {filter: [
			{
				id: 0,
				match: ""
			},
			{
				id: 1,
				match: ""
			},
			{
				id: 2,
				match: ""
			},
			{
				id: 3,
				match: ""
			}
		]};
	}

	changeFilter(column, event) {
		var newFilter = this.state.filter.slice();
		newFilter[column].match = event.target.value;
		this.setState({ filter: newFilter });
	}

	render() {
		return (
			<div>
				<form>
					<div className="form-group">
						<label htmlFor="filterColumn0">Column 0</label>
						<input onChange={this.changeFilter.bind(this, 0)} className="form-control" id="filterColumn0" placeholder="Filter" />
					</div>
					<div className="form-group">
						<label htmlFor="filterColumn1">Column 1</label>
						<input onChange={this.changeFilter.bind(this, 1)} className="form-control" id="filterColumn1" placeholder="Filter" />
					</div>
					<div className="form-group">
						<label htmlFor="filterColumn2">Column 2</label>
						<input onChange={this.changeFilter.bind(this, 2)} className="form-control" id="filterColumn2" placeholder="Filter" />
					</div>
					<div className="form-group">
						<label htmlFor="filterColumn3">Column 3</label>
						<input onChange={this.changeFilter.bind(this, 3)} className="form-control" id="filterColumn3" placeholder="Filter" />
					</div>
				</form>

				<SimpleTable columns={this.props.columns} rows={this.props.rows} filter={this.state.filter} />
			</div>
		);
	}
}

React.render(
  <SimpleTableFilteringExample columns={columns} rows={rows} />,
  document.getElementById('Example3')
);
