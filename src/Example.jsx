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
	],
	[
		<td>Row6</td>,
		<td>Row6</td>,
		<td>Row6</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Row7</td>,
		<td>Row7</td>,
		<td>Row7</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Row8</td>,
		<td>Row8</td>,
		<td>Row8</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Row9</td>,
		<td>Row9</td>,
		<td>Row9</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Row10</td>,
		<td>Row10</td>,
		<td>Row10</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Row11</td>,
		<td>Row11</td>,
		<td>Row11</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Row12</td>,
		<td>Row12</td>,
		<td>Row12</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Row13</td>,
		<td>Row13</td>,
		<td>Row13</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Row14</td>,
		<td>Row14</td>,
		<td>Row14</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Row15</td>,
		<td>Row15</td>,
		<td>Row15</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Row16</td>,
		<td>Row16</td>,
		<td>Row16</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Row17</td>,
		<td>Row17</td>,
		<td>Row17</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Row18</td>,
		<td>Row18</td>,
		<td>Row18</td>,
		<td>
		    <input type="text" />
		</td>         
	],
	[
		<td>Row19</td>,
		<td>Row19</td>,
		<td>Row19</td>,
		<td>
		    <input type="text" />
		</td>         
	]
]

React.render(
  <SimpleTable columns={columns} rows={rows} />,
  document.getElementById('tableTest')
);