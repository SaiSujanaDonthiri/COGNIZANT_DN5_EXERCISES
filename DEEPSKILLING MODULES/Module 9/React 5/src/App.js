import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails
        name="React Cohort"
        startDate="01-July-2026"
        technology="React"
        status="ongoing"
      />

      <CohortDetails
        name="Java Cohort"
        startDate="01-June-2026"
        technology="Java"
        status="completed"
      />
    </div>
  );
}

export default App;