import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

//adding a friend of id1 to id2
//call again to add id1 to id2
export const addFriend = (userData, history) => dispatch => {
  axios
    .post("/api/users/addfriend", userData)
    .then(res => res.json())
    .then(data => {
    	console.log(data);
		if(data) {
			console.log("Hi");
			this.setState({
				// nonFriends : data
			})
		}
		else {
			console.log("All are your friends");
		}
	})
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//find friends of id
export const findFriend = (userData, history) => dispatch => {
  axios
    .post("/api/users/friends", userData)
    .then(res => res.json())
    .then(data => {
    	console.log(data);
		if(data) {
			console.log("Hi");
			this.setState({
				friends : data
			})
		}
		else {
			// console.log("All are your friends");
		}
	})
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//find non friends of id
export const findNonFriend = (userData, history) => dispatch => {
  axios
    .post("/api/users/home", userData)
    .then(res => res.json())
    .then(data => {
    	console.log(data);
		if(data) {
			console.log("Hi");
			this.setState({
				nonFriends : data
			})
		}
		else {
			// console.log("All are your friends");
		}
	})
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
