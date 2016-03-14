import React from 'react';

var Header = React.createClass({
  render: function() {
    return (
    	<header className="intro container-fluid">
            <div className="intro-body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                            {/*<h1 className="brand-heading">Grayscale</h1>*/}
                            <img src="./build/css/images/FeministHackathon.png"></img>
                            <p className="intro-text"><span>{'\u007B'}</span> Presented by the 22nd Women Studies Confernce <span>{'\u007D'}</span></p>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </header>
    );
  }
});

module.exports = Header;