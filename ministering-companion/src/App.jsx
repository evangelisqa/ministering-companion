import FunctionButton from './components/FunctionButtons';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import VisitLog from './components/VisitLog';
import MessageLibrary from './components/MessageLibrary';
import Reporting from './components/Reporting';
import ReminderSystem from './components/ReminderSystem';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Ministering Companion</h1>
        <p className="subtitle">A sacred space to support, record, and uplift your ministering efforts</p>
      </header>

      <main>
        <Login />
        <Dashboard />
        <VisitLog />
        <MessageLibrary />
        <Reporting />
        <ReminderSystem />
      </main>

      <footer>
        <p>© 2025 Relief Society Tools • Built with love and purpose</p>
      </footer>
    </div>
  );
}

export default App;