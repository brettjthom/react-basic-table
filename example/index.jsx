import React from 'react';
import ReactDOM from 'react-dom'
import ReactBasicTable from '../lib/react-basic-table';
import Chance from 'chance';

const chance = new Chance();

// Example 1
var i = 0;
var columns = ['Name', 'Age', 'DOB', 'Note'];
var rows = [];
for (i = 0; i <= 2000; i++) {
    const age = chance.age();
    const name = chance.name();
    const dob = chance.birthday({string: true});
    const note = chance.sentence();
    var item = [
        <span data-ReactBasicTable-value={name}>{name}</span>,
        <span data-ReactBasicTable-value={age.toString()}>{age}</span>,
        <span data-ReactBasicTable-value={dob}>{dob}</span>,
        <span data-ReactBasicTable-value={note}>{note}</span>
    ];

    rows.push(item);
}

ReactDOM.render(
    <ReactBasicTable columns={columns} rows={rows} />,
    document.getElementById('Example1')
);

// Example 2
class ReactBasicTableFiltering extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filter: [
            {
                id: 0,
                match: '',
            },
            {
                id: 1,
                match: '',
            },
            {
                id: 2,
                match: '',
            },
            {
                id: 3,
                match: '',
            },
            ], filterMode: 'Or' 
        };
    }

    changeFilter(column, event) {
        var newFilter = this.state.filter.slice();
        newFilter[column] = {
            id: newFilter[column].id,
            match: event.target.value
        };
        this.setState({ filter: newFilter });
    }

    changeMode() {
        if (this.state.filterMode == 'Or') {
            this.setState({ filterMode: 'And' });
        }
        else {
            this.setState({ filterMode: 'Or' });
        }
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
                <button type="button" className="btn" onClick={this.changeMode.bind(this)}>{'Filter Mode - ' + this.state.filterMode}</button>
            </form>
            <ReactBasicTable columns={this.props.columns} rows={this.props.rows} filter={this.state.filter} filterMode={this.state.filterMode} />
        </div>
        );
    }
}

ReactDOM.render(
    <ReactBasicTableFiltering columns={columns} rows={rows} />,
    document.getElementById('Example2')
);

// Example 3
ReactDOM.render(
    <ReactBasicTable columns={columns} rows={rows} sort={[0, 1, 2]} />,
    document.getElementById('Example3')
);