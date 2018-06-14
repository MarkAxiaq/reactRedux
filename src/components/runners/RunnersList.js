import React, { PropTypes } from "react";
import {Link} from 'react-router';

const RunnersList = ({runners}) => {
  return (
    <div className="row">
      <h1 className="col-12">Runners</h1>
      {runners.map(runner => 
        
          <div className="card col mx-1 mt-3 minWidth-150" key={runner.id}>
            <div className="card-body">
              <h3>{runner.name}</h3>
              <p>
                Id: {runner.id}<br/>
                Age: {runner.age}<br/>
                Long Distance runner: {runner.isLongDistance}<br/>
                Holds a world record: {runner.worldRecord}<br/>
              </p>
              <Link to={`/manageRunner/${runner.id}`}><button type="submit" className="btn btn-default">Update Runner</button></Link>
            </div>
          </div>
        
      )}
    </div>
  );
};
RunnersList.propTypes = {
    runners: PropTypes.array.isRequired
};

export default RunnersList;