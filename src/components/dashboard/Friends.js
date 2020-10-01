import React, {Component} from 'react';

class Friends extends Component {
	//renders the bubble map of all the friends and friends of the user's friend, basically mapping all the users of the database
	//fetch all the lists of the friends
	render() {
		const id = this.props.id;
		console.log("friend id : "+id);

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
		return(
			<div>
				<h1>Hi</h1>
			</div>
		);
	}
}

export default Friends;

// Use a similar code for the graph visualization using regraph 

// import React from 'react';
// import { graph, withHtmlPosition } from '@regraph/graph';
// import { Line } from '@regraph/connections';
// import { Triangle } from '@regraph/arrowheads';
// import styles from './styles';
// const Rect = withHtmlPosition(({ id }) => (
//   <div id={id} style={styles.rect}>
//     {id}
//   </div>
// ));
// const Graph = graph({
//   autoBox: true,
//   extractBoxesFromNodes: true,
//   layout: true,
//   node: { type: Rect },
// });
// export default () => (
//   <Graph
//     width={186}
//     height={220}
//     nodeLayer="html"
//     nodes={[
//       { id: 'Source', x: 40, y: 40 },
//       { id: 'Destination', x: 40, y: 140 },
//     ]}
//     connections={[
//       {
//         id: 'connection',
//         type: Line,
//         strokeWidth: 1,
//         src: { id: 'Source', padding: 5 },
//         dst: { id: 'Destination', padding: 5, marker: <Triangle /> },
//       },
//     ]}
//   />
// );