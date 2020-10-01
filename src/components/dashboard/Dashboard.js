import React, { Component } from "react";
import Menubar from './Menubar';
import Home  from './Home';
import Friends from './Friends'
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Dashboard extends Component {

render() {
    const { user } = this.props.auth; 
    //obtain the user id to send it to all the react components associated with it
    const id = user.id;
    // console.log(id);
return (
    <div>
    <Menubar/>
      <div style={{ height: "20vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey</b> {user.name.split(" ")[0]}
           </h4>
           <p>Let's connect with people you may know</p>
          </div>
        </div>
      </div>
      <Home/>
      <Friends/>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps, 
)(Dashboard);


// <Home id={id}/>