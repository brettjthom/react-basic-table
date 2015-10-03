var columns = ["Column1","Column2","Column3","Column4"];
var rows = [
	[
		<td>Row1</td>,
		<td>Row1</td>,
		<td>Row1</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Row2</td>,
		<td>Row2</td>,
		<td>Row2</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Row3</td>,
		<td>Row3</td>,
		<td>Row3</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Row4</td>,
		<td>Row4</td>,
		<td>Row4</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Row5</td>,
		<td>Row5</td>,
		<td>Row5</td>,
		<td>
		    <input type="text" />
		</td>         
	]
]

React.render(
  <SimpleTable columns={columns} rows={rows} />,
  document.getElementById('Example1')
);

var i = 0;
var rows = [];
for (i = 0; i <= 2000; i++){
	var item = [
		<td>{"Row"+i}</td>,
		<td>{i*2}</td>,
		<td>{i*3}</td>,
		<td>{i*4}</td>
	];

	rows.push(item);
}

React.render(
  <SimpleTable columns={columns} rows={rows} />,
  document.getElementById('Example2')
);
