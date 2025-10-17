import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Ministering Companionship</h1>

      <div>
        <h3>🔐 Login</h3>
        <Link to="/login">
          <button>Sign In</button>
        </Link>
      </div>

      <div>
        <h3>📋 Dashboard</h3>
        <Link to="/dashboard">
          <button>Open Dashboard</button>
        </Link>
      </div>

      <div>
        <h3>📝 Log Visit</h3>
        <Link to="/log-visit">
          <button>Log a Visit</button>
        </Link>
      </div>

      <div>
        <h3>📖 Message Library</h3>
        <Link to="/messages">
          <button>Explore Messages</button>
        </Link>
      </div>

      <div>
        <h3>📬 Monthly Reminders</h3>
        <Link to="/reminders">
          <button>Send Reminder</button>
        </Link>
      </div>

      <div>
        <h3>📊 Progress Reports</h3>
        <Link to="/reports">
          <button>View Reports</button>
        </Link>
      </div>

      <div>
        <h3>🔗 Share Resources</h3>
        <Link to="/resources">
          <button>Share Now</button>
        </Link>
      </div>
    </div>
  );
}