import React from 'react';

var Registration = React.createClass({
	render:function(){
		return(
			<div>
			<h1>April 18 & 19, 2016</h1>
				<h1>{'\u007B'}
				  <span className="ofThe">
				    <span className="of"> $30</span>
				    <span className="the">All Access </span>
				  </span>
				  {'\u007D'}</h1>

				<button className="btn btn-default">Save Your Spot!</button>
			</div>
		)
	}
});

module.exports = Registration;