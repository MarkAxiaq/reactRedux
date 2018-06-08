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
        }
    }

    render() {
        return (
            <RunnersForm
                runner={this.state.runner}
                errors={this.state.errors} />

        );
    }
}
ManageRunnerPage.PropTypes = {
    // runner: PropTypes.Object.isRequired
};

const mapStateToProps = (state, ownProps) => {
    let runner = { id: -1, name: '', age: -1, isLongDistance: false, worldRecord: false };
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