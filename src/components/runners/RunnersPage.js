import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as runnersActions from '../../redux/reduxActions/runnersActions';

class RunnersPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      runner: { name: '' }
    };

    // Without this code the "this" keyword in the below functions will point to the event passed and not to the class
    this.onRNameChange = this.onRNameChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onRNameChange(event) {
    const runner = this.state.runner;
    runner.name = event.target.value;
    this.setState({ runner: runner });
  }

  onSave() {
    this.props.dispatch(runnersActions.createRunner(this.state.runner));
  }

  displayRunner(runner, index) {
    return (
      <div className="col-3" key={index}>
        {runner.name}
      </div>
    );
  }

  render() {
    return (
      // To extract this into a presentation component called AddRunnerForm
      <div className="row justify-content-center">
        <div className="col-8">
          <h1>Runners</h1>
          {this.props.runners}
          <h3>
            <small>Add runner:</small>
          </h3>
          <form>
            <div className="form-group">
              <label htmlFor="runnerName">Runner Name</label>
              <input
                type="text"
                className="form-control"
                id="runnerName"
                aria-describedby="runnerName"
                placeholder="Enter runner name"
                onChange={this.onRNameChange}
                value={this.state.runner.name}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.onSave}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
RunnersPage.propTypes = {
  //dispatch: PropTypes.func.isRequired
  runners: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    runners: state.runners
  };
}

// I could have done the two code lines below this comment
// ---- const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// ---- export default connectedStateAndProps(RunnersPage);

// It is exactly the same as the below line - connect function returns a function that immediately calls our RunnersPage component
export default connect(mapStateToProps)(RunnersPage);

// <div className="col">
//   <p>To extract this into a presentation component called RunnersDisplay</p>
//   <h1>Malta Runners</h1>
//   {this.props.runners.map(this.displayRunner)}
// </div>;
