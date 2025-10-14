import React from 'react';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';

export default function Login() {
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => alert(`Welcome, ${result.user.displayName}`))
      .catch(error => console.error(error));
  };

  return (
    <section>
        <h2>Sign In</h2>
        <button onClick={handleSignIn}>Sign In with Google</button>
    </section>
);
}