import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Graph from 'react-graph-vis';

class Friends extends Component {
	//renders the bubble map of all the friends and friends of the user's friend, basically mapping all the users of the database
	//fetch all the lists of the friends
	render() {
			const graph = {
		    nodes: [
		      { id: 1, label: "a1", title: "node 1 tootip text" },
		      { id: 2, label: "a2", title: "node 2 tootip text" },
		      { id: 3, label: "a3", title: "node 3 tootip text" },
		      { id: 4, label: "a4", title: "node 4 tootip text" },
		      { id: 5, label: "a5", title: "node 5 tootip text" }
		    ],
		    edges: [
		      { from: 1, to: 2 },
		      { from: 1, to: 3 },
		      { from: 2, to: 4 },
		      { from: 2, to: 5 }
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
				<h1>Hi</h1>
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
