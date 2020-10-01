import React, {Component} from 'react';
import axios from 'axios';

class Card extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name : ''
		}
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

	getUserName = () => {
		let targetUrl = '/api/users/username';
		axios({
			method : 'post',
			url : targetUrl,
			headers : {
				"content-type": "application/json"
			},
			data : {
				id : this.props.nonFriendId
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
	}
	
	render() {
		return(
			<div class="container" style = {{
	    					width : "30%"
	    				}}>
				<ul class="collection">
	    			<li class="collection-item avatar   blue lighten-4">
	    				<i class="medium material-icons">person</i>
	    				<p>{this.props.nonFriendId}</p>
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
	    			</li>
    			</ul>
			</div>
		);
	};
}

export default Card;
