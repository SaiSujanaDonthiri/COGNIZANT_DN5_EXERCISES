import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
  const headingStyle = {
    color: props.status === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>{props.name}</h3>

      <dl>
        <dt>Start Date</dt>
        <dd>{props.startDate}</dd>

        <dt>Technology</dt>
        <dd>{props.technology}</dd>

        <dt>Status</dt>
        <dd>{props.status}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;