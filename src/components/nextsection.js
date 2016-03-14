import React from 'react';

var NextSection = React.createClass({

	render:function(){
		return(
			<div className="col-sm-offset-11 col-sm-1 col-centered">
				<a href="#about" className="btn btn-circle page-scroll">
					<i className="fa fa-angle-double-down animated"></i>
				</a>
			</div>
		)
	}
});

module.exports = NextSection;