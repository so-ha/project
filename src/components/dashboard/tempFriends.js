import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Graph from 'react-graph-vis';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from 'axios';

class Friends extends Component {
	//renders the bubble map of all the friends and friends of the user's friend, basically mapping all the users of the database
	//fetch all the lists of the friends
	constructor(props) {
		super(props);
		this.state = {
			users : [],
			node : [],
			edge : []
		}
	}
	componentDidMount() {

		const {user} = this.props.auth;
		let user_id = user.id;
		// console.log(typeof user_id);

		//1. To start with the logged in user as node 1
		//2. Check his friends and friends of friends and assign them node number accordingly

		let n = 1;
		let n1 = []; //for the nodes
		let e = [];  //for the edges
		let queue = []; //for bfs
		let userList = []; 

		//1. finding the nodes
		do {

			// console.log(queue);

			//find the user info
			let username = '';
			let friendList = [];
			

			//instead of the body object use data for sending the request body properly

			const func1 = () => {
				let targetUrl = '/api/users/findUserInfo';
				return axios({
					method : 'POST',
					url : targetUrl,
					headers:
					{
						'Content-Type' :'application/json'
					},
					data : JSON.stringify({
						id : user_id
					})
				})
				.then(res =>{
					return res.data;
				})
			}
			
			func1().then(data => {
				//we need the objectID(stored here in the 'title'), name, friends_ids arraylist
				user_id = data._id;
				username = data.name;
				friendList = data.friends_ids;
				let obj = {
					id : n,
					label : username,
					title : user_id.toString()
				} 
			})

				userList.push({
				id : n,
				friends : friendList,
				title : user_id.toString()	
				});

				n1.push(obj);
				n++;

				if(friendList) {
				// console.log("Pushed");
				queue.push(...friendList); //using the spread operator;
				}
				//remove the front of the queue since it's already visited
				if(queue.length!=0) {
					queue.shift();
					//update the user_id
					if(queue.length!=0)
						user_id = queue[0]._id; 
				}

			})
			.then()
			.catch(err => {
				console.log(err);
			}); 			
			
		} while(queue.length!=0)

		//2. finding the edges of the nodes stored in n1
		for(let i=0;i<userList.length;i++) {
			let f = userList[i].friends_ids;
			if(f==null || f==undefined)
				continue;
			else {
				// console.log(f);
				for(let j=0;j<f.length;j++) {
					//obtain the friend id and find the corresponding id for it
					let fr = f[j]._id;
					// console.log(typeof fr);
					for(let k=0;k<n1.length;k++) {
						if(n1[k].title===(fr)) {
							let obj = {
								from : n1[i].id,
								to : n1[k].id
							}
							e.push(obj);
						}
					}
				}
			} 
		}
		

		//setting the state
		this.setState({
			users : userList,
			node : n1,
			edge : e
		});

	}


	render() {
		const graph = {
			//in nodes, we need to find all the users in our database
		    nodes: this.state.node,
		    //edges will be defined by the friend relationship
		    edges: this.state.edge
		  };
		const options = {
		    layout: {
		      hierarchical: false
		    },
		    edges: {
		      color: "#000000"
		    },
		    height: "600px"
		  };

		const events = {
		    select: function(event) {
		      var { nodes, edges } = event;
		    }
		  };
		return(
			<div>
				<Graph
			      graph={graph}
			      options={options}
			      events={events}
			      getNetwork={network => {
			        //  if you want access to vis.js network api you can set the state in a parent component using this property
			      }}
			    />
			</div>
		);
	}
}

Friends.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps, 
)(Friends);


// let targetUrl = '/api/users/findDBUsers';
			// axios({
			// 		method : 'get',
			// 		url : targetUrl
			// 	})
			// 	.then(res => {
			// 		// console.log(res.data);
			// 		if(res) {
			// 			let n = 1;
			// 			let n1 = [];
			// 			let e = [];
			// 			let user = res.data;
			// 			//setting the nodes
			// 			for(let i=0;i<user.length;i++) {
			// 				let obj = {
			// 					id : n,
			// 					label : user[i].name,
			// 					title : user[i]._id.toString()
			// 				}
			// 				n1.push(obj);
			// 				n++; 
			// 			}
			// 			console.log(user);
			// 			//setting the edges
			// 			for(let i=0;i<user.length;i++) {
			// 				let f = user[i].friends_ids;
			// 				if(f==null || f==undefined)
			// 					continue;
			// 				else {
			// 					// console.log(f);
			// 					for(let j=0;j<f.length;j++) {
			// 						//obtain the friend id and find the corresponding id for it
			// 						let fr = f[j]._id;
			// 						// console.log(typeof fr);
			// 						for(let k=0;k<n1.length;k++) {
			// 							if(n1[k].title===(fr)) {
			// 								let obj = {
			// 									from : n1[i].id,
			// 									to : n1[k].id
			// 								}
			// 								e.push(obj);
			// 							}
			// 						}
			// 					}
			// 				} 
			// 			}
			// 			// console.log(e);
			// 			this.setState({
			// 				users : user,
			// 				node : n1,
			// 				edge : e
			// 			});
			// 		}
			// 		else {
			// 			console.log("No Database users found!");
			// 		}
			// 	})
			// 	.catch(err => {
			// 		console.log(err)
			// 	});
