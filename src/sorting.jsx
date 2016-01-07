'use strict';

export default function sortTable(rows, sortedBy) {
	var newArray;

	if (sortedBy.column === undefined || sortedBy.mode === undefined) {
		newArray = rows;
	}
	else {
		newArray = rows.sort(function(a,b) {
			if (sortedBy.mode == "Asc") {
				return a[sortedBy.column].props["data-simpletable-value"].localeCompare(b[sortedBy.column].props["data-simpletable-value"]);
			}
			else {
				return -(a[sortedBy.column].props["data-simpletable-value"].localeCompare(b[sortedBy.column].props["data-simpletable-value"]));
			}
		});
	}

	return newArray;
}