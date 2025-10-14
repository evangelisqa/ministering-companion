import React from 'react';
import emailjs from 'emailjs-com';

export default function ReminderSystem() {
  const sendReminder = () => {
    emailjs.send("your_service_id", "your_template_id", {
      to_name: "Sister Smith",
      message: "Reminder: Please complete your ministering visit this month."
    }, "your_user_id")
    .then(() => alert("Reminder sent!"))
    .catch(error => console.error("Email error:", error));
  };

  return (
    <section>
      <h2>Monthly Reminder</h2>
      <button onClick={sendReminder}>Send Reminder</button>
    </section>
  );
}
