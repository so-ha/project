import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Graph from 'react-graph-vis';
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
		let targetUrl = '/api/users/findDBUsers';
			axios({
					method : 'get',
					url : targetUrl
				})
				.then(res => {
					// console.log(res.data);
					if(res) {
						let n = 1;
						let n1 = [];
						let user = res.data;
						for(let i=0;i<user.length;i++) {
							let obj = {
								id : n,
								label : user[i].name,
								title : 'node' + n + 'tootip text'
							}
							n1.push(obj);
							n++; 
						}
						this.setState({
							users : user,
							node : n1
						});
					}
					else {
						console.log("No Database users found!");
					}
				})
				.catch(err => {
					console.log(err)
				});
	}
	render() {
		const graph = {
			//in nodes, we need to find all the users in our database
		    nodes: this.state.node,
		    //edges will be defined by the friend relationship
		    edges: [
		      // { from: 1, to: 2 },
		      // { from: 1, to: 3 },
		      // { from: 2, to: 4 },
		      // { from: 2, to: 5 }
		    ]
		  };
		const options = {
		    layout: {
		      hierarchical: true
		    },
		    edges: {
		      color: "#000000"
		    },
		    height: "500px"
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

export default Friends;


// console.log("friend id : "+id);

		//fetch all the non-friends with the given id
		// var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  //   	var targetUrl = '/api/users/friends';
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
		// 			Friends : data
		// 		})
		// 	}
		//
		// })
		// .catch(err =>
		// 	console.log(err)
		// );
