export default function filterTable(rows, criterias, mode) {
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
}