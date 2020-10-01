import React, {Component} from 'react';
import Card from './Card';
// import PropTypes from "prop-types";
// import { connect } from "react-redux";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nonFriends : []
		}
		// const id = this.props.id;
		// console.log("Constructor id : "+id);
	}
	//displays the cards of all those who are not the friends of the user

	render() {
		const id = this.props.id;
		console.log("Home id : "+id);

		//fetch all the non-friends with the given id
		// var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  //   	var targetUrl = '/api/users/home';
		// fetch(targetUrl, {
		// 	method : 'POST',
		// 	headers:{'Content-Type' :'application/json'},
		// 	body : JSON.stringify({
		// 		id : id
		// 	})
		// })
		// .then(res => res.json()) //check if json is actually needed
		// .then(data => {
		// 	//got the list of all the users who are not the friends
		// 	console.log(data);
		// 	if(data) {
		// 		console.log("Hi");
		// 		this.setState({
		// 			nonFriends : data
		// 		})
		// 	}
		// 	else {
		// 		console.log("All are your friends");
		// 	}
		// })
		// .catch(err =>
		// 	console.log(err)
		// );
		return(
			<div >
				<Card />
			</div>
		);
	}
}

export default Home;