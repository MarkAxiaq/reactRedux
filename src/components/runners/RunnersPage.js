import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as runnersActions from "../../redux/reduxActions/runnersActions";
import RunnerList from './RunnersList';
import {browserHistory} from 'react-router';

class RunnersPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddRunner = this.redirectToAddRunner.bind(this);
  }

  redirectToAddRunner(){
      browserHistory.push(`/manageRunner`);
  }

  render() {
    return (
      <div className="container-fluid">
        <RunnerList runners={this.props.runners} updateRunner={this.updateRunner}  />
        <br/>
        <div className="row">
          <button type="submit" className="btn btn-block btn-default" onClick={this.redirectToAddRunner}>Add Runner</button>
        </div>
      </div>
    );
  }
}
RunnersPage.propTypes = {
  runners: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const  mapStateToProps = (state, ownProps) => {
  return {
    runners: state.runners
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions : bindActionCreators(runnersActions, dispatch)
  };
};

// I could have done the two code lines below this comment
// ---- const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// ---- export default connectedStateAndProps(RunnersPage);

// It is exactly the same as the below line - connect function returns a function that immediately calls our RunnersPage component
export default connect(mapStateToProps, mapDispatchToProps)(RunnersPage);
