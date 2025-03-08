// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    avatar_url: string;
    login: string;
    id: number;
    html_url: string;
    name: string;
    location: string;
    email: string;
    company: string;
  }