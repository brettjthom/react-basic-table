var columns = ["Column1","Column2","Column3","Column4"];
var rows = [
	[
		React.createElement("td", null, "Row1"),
		React.createElement("td", null, "Row1"),
		React.createElement("td", null, "Row1"),
		React.createElement("td", null, 
		    React.createElement("input", {type: "text"})
		)         
	],
	[
		React.createElement("td", null, "Row2"),
		React.createElement("td", null, "Row2"),
		React.createElement("td", null, "Row2"),
		React.createElement("td", null, 
		    React.createElement("input", {type: "text"})
		)         
	],
	[
		React.createElement("td", null, "Row3"),
		React.createElement("td", null, "Row3"),
		React.createElement("td", null, "Row3"),
		React.createElement("td", null, 
		    React.createElement("input", {type: "text"})
		)         
	],
	[
		React.createElement("td", null, "Row4"),
		React.createElement("td", null, "Row4"),
		React.createElement("td", null, "Row4"),
		React.createElement("td", null, 
		    React.createElement("input", {type: "text"})
		)         
	],
	[
		React.createElement("td", null, "Row5"),
		React.createElement("td", null, "Row5"),
		React.createElement("td", null, "Row5"),
		React.createElement("td", null, 
		    React.createElement("input", {type: "text"})
		)         
	]
]

React.render(
  React.createElement(SimpleTable, {columns: columns, rows: rows}),
  document.getElementById('Example1')
);

var i = 0;
var rows = [];
for (i = 0; i <= 2000; i++){
	var item = [
		React.createElement("td", null, "Row"+i),
		React.createElement("td", null, i*2),
		React.createElement("td", null, i*3),
		React.createElement("td", null, i*4)
	];

	rows.push(item);
}

React.render(
  React.createElement(SimpleTable, {columns: columns, rows: rows}),
  document.getElementById('Example2')
);
