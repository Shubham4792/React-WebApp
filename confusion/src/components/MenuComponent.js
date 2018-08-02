import React, {Component} from 'react';
import {Media} from 'reactstrap';

class Menu extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const menu;
		return (
				<div className="container">
					<div className="row">
						<Media list>{menu}</Media>
					</div>
				</div>
			);
	}
	export default Menu; 
}