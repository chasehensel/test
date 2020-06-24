import React, { Component } from "react";
import { Link } from "react-router-dom";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions
import UserActions from '../redux/actions/UserActions';

// START IMPORT ACTIONS

// END IMPORT ACTIONS

/** APIs

* actionsUser.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class Test extends Component {
  render() {
    return (
      <div>
        <h1>test</h1>
                    
        
            
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsUser: bindActionCreators(UserActions, dispatch)
  };
};

// Validate types
Test.propTypes = {
  actionsUser: PropTypes.object.isRequired
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    user: state.LoginReducer.user
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
