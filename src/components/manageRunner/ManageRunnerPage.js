import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as runnersActions from '../../redux/reduxActions/runnersActions';
import RunnersForm from './RunnersForm';

class ManageRunnerPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            runner: Object.assign({}, props.runner),
            errors: {}
        };

        // Without this code the "this" keyword in the below functions will point to the event passed and not to the class
        this.updateRunnerState = this.updateRunnerState.bind(this);
        this.saveRunner = this.saveRunner.bind(this);
    }

    // This React Lifecycle function is called anytime that props have changed
    componentWillReceiveProps(nextProps){
        // This can also run when React thinks that props might have changed that's why I am double checking if the id has changed or not before updating the state
        if (this.props.runner.id !== nextProps.runner.id){
            this.setState({runner: Object.assign({}, nextProps.runner)});
        }
    }

    updateRunnerState(event) {
        const field = event.target.name;
        let runner = Object.assign({}, this.state.runner);
        runner[field] = event.target.value;
        return this.setState({ runner: runner });
      }

    saveRunner(event) {
        event.preventDefault();
        this.props.actions.saveRunner(this.state.runner);
        this.context.router.push('/runners');
      }

    render() {
        return (
            <RunnersForm
                runner={this.state.runner}
                errors={this.state.errors}
                onChange={this.updateRunnerState}
                onSave={this.saveRunner} />
        );
    }
}
ManageRunnerPage.propTypes = {
    runner: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

ManageRunnerPage.contextTypes = {
    router: PropTypes.object
};

const getRunnerById = (runners, runnerId) => {
    // The filter() method creates a new array with all elements that pass the test 
    const runner = runners.filter(runner => runner.id == runnerId);

    if(runner.length) return runner[0];
    return null;

};

const mapStateToProps = (state, ownProps) => {
    let runner = {name: '', age: 0, isLongDistance: false, worldRecord: false };
    
    // Reading the Id from the route parameter manageRunner/:id
    const runnerId = ownProps.params.id;
    if(runnerId && state.runners.length > 0){
        runner = getRunnerById(state.runners, runnerId);
    }

    return {
        runner: runner
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(runnersActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageRunnerPage);