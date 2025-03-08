import React, { useEffect, useState } from 'react';
import { getSavedCandidates } from '../utils/localStorage';
import { Candidate } from '../interfaces/Candidate.interface';
import CandidateList from '../components/CandidateList';
import './SavedCandidates.css';

const SavedCandidates: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const savedCandidates = getSavedCandidates();
    setCandidates(savedCandidates);
  }, []);

  return (
    <div className='candidate-search'>
      <h1>Potential Candidates</h1>
      {candidates.length > 0 ? (
        <CandidateList candidates={candidates} />
      ) : (
        <p>No potential candidates saved.</p>
      )}
    </div>
  );
};

export default SavedCandidates;