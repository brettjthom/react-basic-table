/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isArrayOfObjectsEqual from './utils/isArrayOfObjectsEqual';
import PagingMain from './paging-main';
import filterTable from './filtering';
import sortTable from './sorting';

export default class ReactBasicTable extends React.Component {
  constructor(props) {
    super(props);

    this._setPage = this.setPage.bind(this);

    this.state = {
      page: 1,
      sortedBy: {},
      previousFilter: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { filter } = props;
    const { previousFilter } = state;
    // New filter... reset to page 1
    if (!isArrayOfObjectsEqual(previousFilter, filter)) {
      return {
        page: 1,
        previousFilter: props.filter,
      };
    }

    return null;
  }

  setPage(newPage) {
    this.setState({ page: newPage });
  }

  sortColumn(index) {
    // if column is not a sortable column... return
    const { sort } = this.props;
    const { sortedBy } = this.state;
    if (sort.indexOf(index) === -1) {
      return;
    }

    if (sortedBy.column !== index) {
      this.setState({ sortedBy: { column: index, mode: 'Asc' } });
    } else {
      this.setState({
        sortedBy: {
          column: index,
          mode: sortedBy.mode === 'Asc' ? 'Desc' : 'Asc',
        },
      });
    }
  }

  render() {
    const {
      rows, columns, hideColumns, filter, filterFunction, filterMode, pageSize,
    } = this.props;
    const { page, sortedBy } = this.state;

    const headers = columns.map((header, index) => {
      const hideColumn = hideColumns.indexOf(index) !== -1;
      return (
        <th
          key={`header${index}`}
          className={classNames({ hidden: hideColumn })}
          style={hideColumn ? { display: 'none' } : {}}
          onClick={this.sortColumn.bind(this, index)}
        >
          {header}
        </th>
      );
    });

    // Filter/Sort the rows for the final render
    const filteredRows = filterTable(rows,
      filter,
      filterFunction,
      filterMode);
    let rowElements = sortTable(filteredRows, sortedBy)
      .slice((page - 1) * pageSize,
        page * pageSize)
      .map((row, index) => {
        const items = row.map((td, tdIndex) => {
          const hideColumn = hideColumns.indexOf(tdIndex) !== -1;
          return (
            <td
              key={`row${index}item${tdIndex}`}
              className={classNames({ hidden: hideColumn })}
              style={hideColumn ? { display: 'none' } : {}}
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

    if (rowElements.length === 0) {
      rowElements = (
        <tr key="rowempty">
          <td colSpan={headers.length} className="dataTables_empty">
            No matching records found.
          </td>
        </tr>
      );
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
                {rowElements}
              </tbody>
            </table>
          </div>
        </div>
        <PagingMain
          page={page}
          numPages={Math.ceil(filteredRows.length / pageSize)}
          setPage={this._setPage}
        />
      </div>
    );
  }
}

ReactBasicTable.defaultProps = {
  rows: [],
  columns: [],
  pageSize: 10,
  hideColumns: [],
  filter: [],
  sort: [],
  filterMode: 'Or',
  filterFunction: () => {},
};

ReactBasicTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.array),
  columns: PropTypes.arrayOf(PropTypes.string),
  pageSize: PropTypes.number,
  hideColumns: PropTypes.arrayOf(PropTypes.number),
  filter: PropTypes.PropTypes.arrayOf(PropTypes.object),
  sort: PropTypes.arrayOf(PropTypes.number),
  filterMode: PropTypes.string,
  filterFunction: PropTypes.func,
};
