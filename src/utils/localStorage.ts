import { Candidate } from '../interfaces/Candidate.interface';

const LOCAL_STORAGE_KEY = 'savedCandidates';

export const saveCandidate = (candidate: Candidate) => {
  const savedCandidates = getSavedCandidates();
  savedCandidates.push(candidate);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedCandidates));
};

export const getSavedCandidates = (): Candidate[] => {
  const savedCandidates = localStorage.getItem(LOCAL_STORAGE_KEY);
  return savedCandidates ? JSON.parse(savedCandidates) : [];
};