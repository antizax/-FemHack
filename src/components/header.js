import React from 'react';

var Header = React.createClass({
  render: function() {
    return (
    	<header className="intro container-fluid">
            <div className="intro-body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <img src="./build/css/images/FeministHackathon.png" alt="#FemHack"></img>
                            <p className="intro-text"><span>{'\u007B'}</span>Presented by the 22<sup>nd</sup> Women's Studies Conference<span>{'\u007D'}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
  }
});

module.exports = Header;