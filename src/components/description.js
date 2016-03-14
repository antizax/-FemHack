import React from 'react';

var Description = React.createClass({
	render: function() {
		return(
			<div className="container flow">
				<h2>// Our Flow</h2>
				<ul>
					<li>Prototype, design and pitch a campaign, website, app or technology.</li>
					<li>Guest panelists will lead a consensus ballot vote to choose winners.</li>
					<li>Teams of 3-5 must consist of at least fifty percent members who do <br></br>not self identify as male.</li>
					<li>Mentors from SCSU Computer Science Club and A100 will be available <br></br>to assist teams with their projects</li>
				</ul>
			</div>
		);
	}
});

module.exports = Description;