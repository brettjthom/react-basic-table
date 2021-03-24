export default function filterTable(rows, criterias, filterFunction, mode) {
    if (mode === 'And' || mode === 'Or') {
        // filter out bogus filters
        const filteredCriterias = criterias.filter((criteria) => {
            if (criteria.match && criteria.match !== '') {
                return true;
            }
            return false;
        });
        // return just the rows if none is left
        if (filteredCriterias && filteredCriterias.length === 0) {
            return rows;
        }

        // filter out the rows
        return rows.filter((row) => {
            const criteriasMeant = filteredCriterias.filter((criteria) => {
                return row[criteria.id]
                    .props['data-ReactBasicTable-value']
                    .toLowerCase()
                    .indexOf(criteria.match.toLowerCase()) !== -1;
            });
            return criteriasMeant.length >= (mode === 'And' ? filteredCriterias.length : 1);
        });
    // Using advanced filtering with a function
    } if (mode === 'Function') {
        return rows.filter((row) => {
            const values = row.map((item) => {
                return item.props['data-ReactBasicTable-value'];
            });

            return filterFunction(...values);
        });
    }

    return rows;
}
