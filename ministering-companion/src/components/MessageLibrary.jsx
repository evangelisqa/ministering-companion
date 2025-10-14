import React from 'react';

const messages = [
  {
    title: "Mosiah 2:17",
    content: "When ye are in the service of your fellow beings ye are only in the service of your God."
  },
  {
    title: "President Nelson",
    content: "Ministering is learning to care for each other and to strengthen faith in Jesus Christ."
  },
  {
    title: "Church Magazine",
    content: "https://www.churchofjesuschrist.org/study/liahona"
  }
];

export default function MessageLibrary() {
  return (
    <section>
      <h2>Message Library</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            <strong>{msg.title}</strong><br />
            {msg.content.startsWith("http") ? (
              <a href={msg.content} target="_blank" rel="noopener noreferrer">Read More</a>
            ) : (
              <p>{msg.content}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}