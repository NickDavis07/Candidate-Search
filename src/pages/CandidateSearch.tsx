import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import { saveCandidate } from '../utils/localStorage';
import { Candidate } from '../interfaces/Candidate.interface';
import './CandidateSearch.css';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  useEffect(() => {
    const fetchCandidate = async () => {
      const candidates = await searchGithub();
      if (candidates.length > 0) {
        setCandidate(candidates[0]);
      }
    };
    fetchCandidate();
  }, []);

  const handleSaveCandidate = () => {
    if (candidate) {
      saveCandidate(candidate);
      fetchNextCandidate();
    }
  };

  const fetchNextCandidate = async () => {
    const candidates = await searchGithub();
    if (candidates.length > 0) {
      setCandidate(candidates[0]);
    } else {
      setCandidate(null);
    }
  };

  return (
    <div className="candidate-search">
      <h1>Candidate Search</h1>
      {candidate ? (
        <div className="candidate-container">
          <CandidateCard candidate={candidate} />
          <div className="buttons">
            <button className="button minus" onClick={fetchNextCandidate}>-</button>
            <button className="button plus" onClick={handleSaveCandidate}>+</button>
          </div>
        </div>
      ) : (
        <p>No more candidates available</p>
      )}
    </div>
  );
};

export default CandidateSearch;
