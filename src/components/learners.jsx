// learners.jsx

import React from 'react';
import { learnerData } from '../App';

function LearnerDetails() {
  return (
    <div>
      <h1>{learnerData.name}</h1>
      <p>{learnerData.bio}</p>
      <h3>Scores:</h3>
      {learnerData.scores.map((score, index) => (
        <Score key={index} score={score} />
      ))}
    </div>
  );
}

export default LearnerDetails;
