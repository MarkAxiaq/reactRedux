import React, { PropTypes } from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const RunnersForm = ({runner, errors}) => {

  const onChange = () => {};

  return (
    <form>
        <h1>Add runner:</h1>
        <TextInput name="name" label="Name" value="{runner.name}" onChange={onChange} error={errors.title} />
    </form>
  );
};
RunnersForm.propTypes = {
    runner: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

export default RunnersForm;