import React, { PropTypes } from "react";

const RunnersList = ({runners}) => {
  return (
    <div className="row">
      <h1 className="col-12">Runners</h1>
      {runners.map(runner => 
        <div className="card col mx-1 mt-3 minWidth-150" key={runner.id}>
            <div className="card-body">{runner.name}</div>
        </div>
      )}
    </div>
  );
};
RunnersList.propTypes = {
    runners: PropTypes.array.isRequired
};

export default RunnersList;