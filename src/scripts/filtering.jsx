function filterTable(rows, criterias) {
	var filteredCriterias = criterias.filter(function(criteria) { if (criteria.match && criteria.match !== "") return true; } );
	if (filteredCriterias && filteredCriterias.length == 0) return rows;
	var newArray = rows.filter(function(row) {
		var keep = true;
		filteredCriterias.forEach(function(criteria) {
			if (row[criteria.id].props["data-simpletable-value"].toLowerCase().indexOf(criteria.match.toLowerCase()) == -1)
				keep=false;
		})

		return keep;
	});

	return newArray;
}