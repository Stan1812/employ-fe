import React from 'react';
import { connect } from 'dva';
import JobList from '../../components/job/jobList';

const Job = ({ dispatch, job }) => {
  function handleDelete(id) {
    dispatch({
      type: 'job/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Job</h2>
      <JobList onDelete={handleDelete} job={job} />
    </div>
  );
};

// export default Job;
export default connect(({ job }) => ({
  job,
}))(Job);
