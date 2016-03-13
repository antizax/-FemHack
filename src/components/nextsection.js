import React from 'react';

var NextSection = React.createClass({

	render:function(){
		return(
			<a href="#about" className="btn btn-circle page-scroll">
				<i className="fa fa-angle-double-down animated"></i>
			</a>
		)
	}
});

module.exports = NextSection;