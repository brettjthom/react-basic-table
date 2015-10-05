// Example 1
var columns = ["Name","State","Age","Note"];
var rows = [
	[
		<td>Joe</td>,
		<td>PA</td>,
		<td>22</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Jim</td>,
		<td>TX</td>,
		<td>55</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>John</td>,
		<td>NJ</td>,
		<td>34</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Sam</td>,
		<td>CA</td>,
		<td>68</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Steve</td>,
		<td>NY</td>,
		<td>12</td>,
		<td>
		    <input type="text" />
		</td>         
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
		<td data-simpletable-value={"Row"+i}>{"Row"+i}</td>,
		<td data-simpletable-value={"Test"+i}>{"Test"+i}</td>,
		<td data-simpletable-value={"Testing"+i}>{"Testing"+i}</td>,
		<td data-simpletable-value={"End"+i}>{"End"+i}</td>
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
