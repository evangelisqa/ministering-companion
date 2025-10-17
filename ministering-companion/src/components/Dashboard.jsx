import React from 'react';
import { Link } from 'react-router-dom';

export default function FunctionButton() {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Major Functions</h2>
      <Link to="/dashboard">
        <button>📋 Open Dashboard</button>
      </Link>
      <Link to="/log-visit">
        <button>📝 Log a Visit</button>
      </Link>
      <Link to="/messages">
        <button>📖 Message Library</button>
      </Link>
      <Link to="/reminders">
        <button>📬 Monthly Reminders</button>
      </Link>
      <Link to="/reports">
        <button>📊 Progress Reports</button>
      </Link>
      <Link to="/resources">
        <button>🔗 Share Resources</button>
      </Link>
    </div>
  );
}





