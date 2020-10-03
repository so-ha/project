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
						let e = [];
						let user = res.data;
						//setting the nodes
						for(let i=0;i<user.length;i++) {
							let obj = {
								id : n,
								label : user[i].name,
								title : user[i]._id.toString()
							}
							n1.push(obj);
							n++; 
						}
						console.log(user);
						//setting the edges
						for(let i=0;i<user.length;i++) {
							let f = user[i].friends_ids;
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
						// console.log(e);
						this.setState({
							users : user,
							node : n1,
							edge : e
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
		    edges: this.state.edge
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
