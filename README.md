# react-basic-table

[![npm version](https://badge.fury.io/js/react-basic-table.svg)](https://badge.fury.io/js/react-basic-table)
[![npm](http://img.shields.io/npm/dm/react-basic-table.svg)](https://npmjs.org/package/react-basic-table)
[![build status](https://travis-ci.org/brettjthom/react-basic-table.svg?branch=master)](https://travis-ci.org/brettjthom/react-basic-table)

React basic table is a basic table library which handles basic table functions like paging, sorting, and filtering for you.

## Usage

To install react basic table using npm run:
```
npm install --save react-basic-table
```
Then use react basic table like below:
```javascript
import ReactBasicTable from 'react-basic-table';
...
render() {
    var columns = ['Name', 'State', 'Age', 'Note'];
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
        ]
    ];
    return <ReactBasicTable rows={rows} columns={columns} />
};
```

## Props
| Prop | Description | Default | Example |
| --- | --- | --- | --- |
| rows | An array of rows. Every in this array is an array of components. This way you can render inputs and other components into the table. | ```[]``` | ``` [[<span>Joe</span> ],[<span>John</span>]]```
| columns | An array of strings that are the names of the column.  | ```[]``` | ```['Name']``` |
| pageSize | The number of rows on a page. | 10 | 15 |
| hideColumns | An array of column indexes that you want to hide. You can still filter on this column. | ```[]``` | ```[1]``` |
| filter | An array of objects ({id, match}) that define filter criteria and column index. To use this you need to define a ```data-ReactBasicTable-value``` on the components in the row prop. This allows filtering on all components. | ```[]``` | ```[{id: 0, match: 'John'}]``` |
| filterMode | An 'Or' or 'And' is accepting here. It is used in the filtering logic. In the case of 'Or' only one of the filter criteria needs to be true and in the case of 'And' they all need to be true. You can also pass 'Fuction' here to use advanced filtering logic declared in a function. See 'filterFunction' prop | ```'Or'``` | ```'And'``` |
| filterFunction | A function used when 'filterMode' is 'Function'. This function takes an  array of values and returns a bool if field passes the filter. ``` (...values) => { return values[0] === 'OneA'; } ``` | Empty function | ``` (...values) => { return values[0] === 'OneA'; } ``` |
| sort | An array of column indexes that you want to be sortable. To use this you need to define a ```data-ReactBasicTable-value``` on the components in the row prop. This allows filtering on all components. | ```[]``` | ```[1]``` |

## Examples

Please see the example directory for examples of all of available functionality. We also have a code pen [here](http://codepen.io/brettjthom/pen/rWobNO).
