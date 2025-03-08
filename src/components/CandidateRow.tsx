import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

interface CandidateRowProps {
  candidate: Candidate;
}

const CandidateRow: React.FC<CandidateRowProps> = ({ candidate }) => {
  return (
    <tr>
      <td><img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} width="50" /></td>
      <td>{candidate.name}</td>
      <td>{candidate.login}</td>
      <td>{candidate.location}</td>
      <td>{candidate.email}</td>
      <td>{candidate.company}</td>
      <td><a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a></td>
    </tr>
  );
};

export default CandidateRow;