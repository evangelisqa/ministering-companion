import React, { useState } from 'react';
import { db } from '../firebase-config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export default function VisitLog() {
  const [household, setHousehold] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "visitLogs"), {
        household,
        notes,
        timestamp: Timestamp.now()
      });
      alert(`Visit logged for ${household}`);
      setHousehold('');
      setNotes('');
    } catch (error) {
      console.error("Error logging visit:", error);
    }
  };

  return (
    <section>
      <h2>Visit Logging</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Household Name"
          value={household}
          onChange={(e) => setHousehold(e.target.value)}
          required
        />
        <textarea
          placeholder="Impressions & Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type="submit">Log Visit</button>
      </form>
    </section>
  );
}