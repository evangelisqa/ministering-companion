import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import VisitLog from './components/VisitLog';
import Messages from './components/Messages';
import Reminders from './components/Reminders';
import Reports from './components/Reports';
import Resources from './components/Resources';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/log-visit" element={<VisitLog />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/reminders" element={<Reminders />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  </BrowserRouter>
);