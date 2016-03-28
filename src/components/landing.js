import React,{Component} from 'react'
import Navbar from './navbar'

export default class Landing extends Component{

	
	render(){
		return(
			<div className="landing-div" >
				<Navbar/>
				<div className="femhack-img-div">
					<img className="femhack-header-img" src="build/css/images/femhack.png"/>
				</div>
				<div className="one-liner">
					<br/>
					{'\uFF5B '} A YOUTH EMPOWERED HACK JAM {'\uFF5D'}
				</div>
				<div className="header-date">
					APRIL  15 & 16 2016
				</div>
				<div className="apply-button">
					<br/><br/><br/>
					<button type="button" className="btn btn-warning">Apply Now</button>
				</div>
				<div className="header-registration">
					<span className="header-registration-dollar">$30</span><br></br>
					REGISTRATION<br></br>
					PER MEMBER
				</div>
			</div>
		)
	}
}