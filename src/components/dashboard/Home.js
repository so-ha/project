import React, {Component} from 'react';
import Card from './Card';
import axios from 'axios';
// import PropTypes from "prop-types";
// import { connect } from "react-redux";

class Home extends Component {
	constructor(props) {
		super(props);
		this.nonFriends = [];
	}

	componentDidMount() {
		let targetUrl = '/api/users/home';
		axios({
			method : 'post',
			url : targetUrl,
			headers : {
				"content-type": "application/json"
			},
			data : {
				id : this.props.id
			}
		})
		.then(res => {
			//got the list of all the users who are not the friends
			console.log(res);
			if(res) {
				console.log("Hi");
				this.nonFriends = res.data; 
				// console.log(this.nonFriends);
			}
			else {
				console.log("All are your friends");
			}
		})
		.catch(err => {
			console.log(err)
		}
		);
	}

	//displays the cards of all those who are not the friends of the user

	render() {
		console.log("Home id : "+this.props.id);
		//fetch all the non-friends with the given id
		
		return(
			<div >
				<Card />
			</div>
		);
	}
}

export default Home;
