import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import { saveCandidate } from '../utils/localStorage';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  useEffect(() => {
    const fetchCandidate = async () => {
      const candidates = await searchGithub();
      if (candidates.length > 0) {
        console.log('Fetched Candidate:', candidates[0]); // Debugging line
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
    <div>
      {candidate ? (
        <div>
          <CandidateCard candidate={candidate} />
          <button onClick={handleSaveCandidate}>+</button>
          <button onClick={fetchNextCandidate}>-</button>
        </div>
      ) : (
        <p>No more candidates available</p>
      )}
    </div>
  );
};

export default CandidateSearch;
