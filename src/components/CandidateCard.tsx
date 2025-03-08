import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  return (
    <div className="candidate-card">
      <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} className="candidate-avatar" />
      <div className="candidate-info">
        <h2>{candidate.name} <span>({candidate.login})</span></h2>
        <p>Location: {candidate.location}</p>
        <p>Email: <a href={`mailto:${candidate.email}`}>{candidate.email}</a></p>
        <p>Company: {candidate.company}</p>
        <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
      </div>
    </div>
  );
};

export default CandidateCard;