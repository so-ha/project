import React, {Component} from 'react';

class Card extends Component {

	addFriend = () => {

	};
	
	render() {
		return(
			<div >
				<div className="row">
			    <div className="col s5 center-align">
			      <div className="card small black">
			        <div className="card-content white-text">
			          <span className="card-title">User name</span>
			        </div>
			        <div className="card-action">
			          <button
		              style={{
		                width: "150px",
		                borderRadius: "3px",
		                letterSpacing: "1.5px",
		                marginTop: "1rem"
		              }}
		              onClick={this.addFriend}
		              className="btn btn-medium waves-effect waves-light hoverable blue accent-4"
		            >
		              Add Friend
		            </button>
			        </div>
			      </div>
			    </div>
  				</div>
			</div>
		);
	};
}

export default Card;