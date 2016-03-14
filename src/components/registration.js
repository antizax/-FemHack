import React from 'react';

var Registration = React.createClass({
	render:function(){
		return(
			<div className="container flow">
			<h1>April 18 & 19, 2016</h1>

			<h1>
				<table>
					<tbody>
						<tr>
							<td><span className="curlyBrace">{'\u007B'}</span></td>
							<td><span>$30</span>  All Access</td>
							<td><span className="curlyBrace">{'\u007D'}</span></td>
						</tr>
					</tbody>
				</table>
			</h1>

				<button className="btn btn-default">Save Your Spot!</button>
			</div>
		)
	}
});

module.exports = Registration;