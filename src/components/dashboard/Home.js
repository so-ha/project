import React, {Component} from 'react';
import Card from './Card';
import axios from 'axios';
// import PropTypes from "prop-types";
// import { connect } from "react-redux";

class Home extends Component {
	constructor(props) {
		super(props);
		this.nonFriends = [];
		this.state = {
			updated : false
		}
	}

	componentWillMount() {
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
				this.nonFriends = res.data; 
				console.log(this.nonFriends);
				this.setState({
					updated : true
				});
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
		//all the non-friends are stored in this.nonFriends field
		let rows = [];
		for(let i=0;i<this.nonFriends.length;i++) {
			let nf = this.nonFriends[i];
			// console.log(nf);
			//the current id of the user also needs to be passed to the card component
			rows.push(<Card nonFriendId = {nf} userId = {this.props.id}/>)
		}
		console.log(rows);
		return(
			<div >
				{rows}
			</div>
		);
	}
}

export default Home;
