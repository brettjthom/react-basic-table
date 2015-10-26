'use strict';

export default function filterTable(rows, criterias, mode) {
	var filteredCriterias = criterias.filter(function(criteria) { if (criteria.match && criteria.match !== "") return true; } );
	if (filteredCriterias && filteredCriterias.length == 0) return rows;
	var newArray;
	if (mode == "And") {
		newArray = rows.filter(function(row) {
			var keep = true;
			filteredCriterias.forEach(function(criteria) {
				if (row[criteria.id].props["data-simpletable-value"].toLowerCase().indexOf(criteria.match.toLowerCase()) == -1)
					keep=false;
			})

			return keep;
		});
	}

	if (mode == "Or") {
		newArray = rows.filter(function(row) {
			var keep = false;
			filteredCriterias.forEach(function(criteria) {
				if (row[criteria.id].props["data-simpletable-value"].toLowerCase().indexOf(criteria.match.toLowerCase()) !== -1)
					keep=true;
			})

			return keep;
		});
	}

	return newArray;
}
