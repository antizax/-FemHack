import React from 'react';

var Description = React.createClass({
	render: function() {
		return(
			<div className="flow">
				<h2>// Our Flow</h2>
				<ul>
					<li>A one day event where teams of youth will prototype, design and pitch a campaign, website, app or technology.</li>
					<li>Guest panelists will lead a consensus ballot vote to choose winners</li>
					<li>Teams of 3-5 must consist of at least fifty percent members who do not self identify as male.</li>
					<li>Mentors from Southern Connecticut State University Computer Science Club and A100 will be available for each team.</li>
				</ul>
			</div>
		);
	}
});

module.exports = Description;