export default function filterTable(rows, criterias, mode) {
    const filteredCriterias = criterias.filter((criteria) => {
        if (criteria.match && criteria.match !== '') {
            return true;
        }
        return false;
    });
    let keep;
    let newArray;
    if (filteredCriterias && filteredCriterias.length === 0) {
        return rows;
    }
    if (mode === 'And') {
        newArray = rows.filter((row) => {
            keep = true;
            filteredCriterias.forEach((criteria) => {
                if (row[criteria.id]
                    .props['data-simpletable-value']
                    .toLowerCase()
                    .indexOf(criteria.match.toLowerCase()) === -1) {
                    keep = false;
                }
            });

            return keep;
        });
    }

    if (mode === 'Or') {
        newArray = rows.filter((row) => {
            keep = false;
            filteredCriterias.forEach((criteria) => {
                if (row[criteria.id]
                    .props['data-simpletable-value']
                    .toLowerCase()
                    .indexOf(criteria.match.toLowerCase()) !== -1) {
                    keep = true;
                }
            });

            return keep;
        });
    }

    return newArray;
}
