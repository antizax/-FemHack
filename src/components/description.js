import React,{Component} from 'react'

export default class Description extends Component{
	render(){
		return(
			<div className="description-div">
				<h2 className="description-header">What to expect</h2>
				<div className="container description-paragraph">
					<p>
						#FemHack is a Hack Jam that will be held at Southern Connecticut State University. 
						We welcome teens and young adults to join us in building awesome software and hardware projects. 
						Industry experts and mentors come from all over the country to create an environment that fosters an 
						atmosphere of learning through tech talks and one-on-one guidance. We encourage beginner and advanced 
						hackers alike to challenge themselves and expand their skills.
					</p>
				</div>
			</div>
		)
	}
}