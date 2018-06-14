import React, { PropTypes } from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const RunnersForm = ({runner, errors, onChange, onSave}) => {

  return (
    <form>
        <h1>Add runner:</h1>
        <TextInput name="name" label="Name" value={runner.name} onChange={onChange} error={errors.title} />
        <button className="btn btn-default" onClick={onSave}>Save Runner</button>
    </form>
  );
};
RunnersForm.propTypes = {
    runner: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
};

export default RunnersForm;