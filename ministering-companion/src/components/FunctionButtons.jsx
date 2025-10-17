import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Ministering Companionship</h1>
      <Link to="/dashboard">
        <button>Open Dashboard</button>
      </Link>
    </div>
  );
}