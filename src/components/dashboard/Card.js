import React, {Component} from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class Card extends Component {

	constructor(props) {
		super(props);
	}

	addFriend = () => {
		let targetUrl = '/api/users/addfriend';
		axios({
			method : 'post',
			url : targetUrl,
			headers : {
				"content-type": "application/json"
			},
			data : {
				id1 : this.props.id,
				id2 : this.props.nonFriendId
			}
		})
		.then(res => {
			console.log(res);
			if(res) {
			}
			else {
				console.log("");
			}
		})
		.catch(err => {
			console.log(err)
		}
		);
	};
	
	render() {
		return(
			<div className="container" style = {{
	    					width : "30%"
	    				}}>
	    			<UserCard nonFriendId={this.props.nonFriendId}/>
	    			<button
			          style={{
			            width: "150px",
			            borderRadius: "3px",
			            letterSpacing: "1.5px",
			            marginTop: "1rem"
			          }}
			          onClick={this.addFriend}
			          className="btn btn-medium waves-effect waves-light hoverable blue accent-4">
			          Add Friend
			        </button>
			</div>
		);
	};
}

export default Card;

