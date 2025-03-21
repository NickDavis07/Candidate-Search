import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav className="nav">
      <ul className="nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Candidate Search
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/SavedCandidates"
            className={
              currentPage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'
            }
          >
            Potential Candidates
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
