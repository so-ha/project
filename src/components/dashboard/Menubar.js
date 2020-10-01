import React, {Component} from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Menubar extends Component {
	onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  	};
	render() {
		// const { user } = this.props.auth;
		// console.log(user);
		return(
			<div>
			 <nav>
			    <div className="nav-wrapper blue accent-3">
			      <ul id="nav-mobile" className="left hide-on-med-and-down">
			        <li><Link to='/dashboard'>Home</Link></li>
			        <li><Link to='/friends'>Friends</Link></li>
			         <li className="right" onClick={this.onLogoutClick}><Link to='/'>Logout</Link></li>
			      </ul>
			    </div>
  			</nav>
        	</div>
		);
	}
}

Menubar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Menubar);