import React, {Component} from 'react';
import axios from 'axios';

class userCard extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
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
				this.name = res.data
				console.log("Name : "+this.name);
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
		console.log("Render name : "+ this.name);
		return(
			<div>
				<ul className="collection">
	    			<li className="collection-item avatar   blue lighten-4">
	    				<i className="medium material-icons">person</i>
	    				<p>Add {this.props.nonFriendId} as your friend?</p>
	    			</li>
    			</ul>
			</div>
		);
	}
}

export default userCard;