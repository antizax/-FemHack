import React from 'react';
import NavBar from './navbar';
import Header from './header';
import Description from './description';
import NextSection from './nextsection';
import Registration from './registration';
// import Details from './details';

// var App = 
var App = React.createClass({
	render: function() {
		return (
			<div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
				<NavBar/>
				<Header/>
				<div className="container">
					<div className="col-md-8"> <Description/> </div>
					<div className="col-md-4"> <Registration/> </div>
				</div>
				<NextSection/>
			</div>
		);
	}
});

module.exports = App;