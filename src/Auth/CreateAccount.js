import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function CreateAccount({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [Lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isExistingUser, setIsExistingUser] = useState(false);
  const navigate = useNavigate();

  const handleAction = () => {
    if (isExistingUser) {
      // Basic login logic
      if (username === 'user' && password === 'password') {
        setIsAuthenticated(true);
        navigate('/home');
      } else {
        alert('Invalid credentials');
      }
    } else {
      // Basic account creation logic
      if (username && name && Lname && email && password) {
        setIsAuthenticated(true);
        navigate('/home');
      } else {
        alert('Please fill in all fields');
      }
    }
  };

  return (
    <form>
      <h2>{isExistingUser ? 'Login' : 'Create Account'}</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {!isExistingUser && (
        <>
          <input
            type="text"
            placeholder="First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={Lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </>
      )}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={handleAction}>{isExistingUser ? 'Login' : 'Create Account'}</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
}

export default CreateAccount;
