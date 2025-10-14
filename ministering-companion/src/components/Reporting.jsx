import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

export default function Reporting() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const querySnapshot = await getDocs(collection(db, "visitLogs"));
      const data = querySnapshot.docs.map(doc => doc.data());
      setLogs(data);
    };
    fetchLogs();
  }, []);

  return (
    <section>
      <h2>Visit Summary</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <strong>{log.household}</strong>: {log.notes}
          </li>
        ))}
      </ul>
    </section>
  );
}
