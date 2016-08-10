export default function sortTable(rows, sortedBy) {
    let newArray;

    if (sortedBy.column === undefined || sortedBy.mode === undefined) {
        newArray = rows;
    } else {
        newArray = rows.sort((a, b) => {
            if (sortedBy.mode === 'Asc') {
                return a[sortedBy.column]
					.props['data-simpletable-value']
					.localeCompare(b[sortedBy.column].props['data-simpletable-value']);
            }
            return -(a[sortedBy.column]
                .props['data-simpletable-value']
                .localeCompare(b[sortedBy.column].props['data-simpletable-value']));
        });
    }

    return newArray;
}
