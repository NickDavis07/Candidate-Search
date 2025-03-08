import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import CandidateRow from './CandidateRow';

interface CandidateListProps {
  candidates: Candidate[];
}

const CandidateList: React.FC<CandidateListProps> = ({ candidates }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Username</th>
          <th>Location</th>
          <th>Email</th>
          <th>Company</th>
          <th>Profile</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((candidate) => (
          <CandidateRow key={candidate.id} candidate={candidate} />
        ))}
      </tbody>
    </table>
  );
};

export default CandidateList;