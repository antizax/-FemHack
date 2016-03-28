import React,{Component} from 'react'

export default class About extends Component{
	render(){
		return(
			<div className="about-div">
				<div className="container">
					<h2 className="about-div-header">// OUR FLOW</h2>
					<div className="container about-div-list">
						<p>1. A one day event where teams of youth will prototype, design, and pitch a campaign, website, app, or technology</p>
						<p>2. Guest panelists will lead a consensus ballot vote to choose winners</p>
						<p>3. Teams of 3-5 must consist of at least fifty percent members who do not self identify as males</p>
						<p>4. Mentors from Southern Connecticut State University Computer Science Club and A100 will be available for each team</p>
					</div>
					<div className="apply-button">
						<br/>
						<button type="button" className="btn btn-warning">Apply Now</button>
					</div>
				</div>
			</div>
		)
	}
}