import { useState } from 'react';
import { useAuth } from './AuthContext';

function Login() {
  const { isLoggedIn, userName, role, login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
    }
  };

  const handleLogout = () => {
    logout();
    setEmail('');
    setPassword('');
  };

  if (isLoggedIn) {
    return (
      <div style={{padding: '20px', maxWidth: '600px', margin: '0 auto'}}>
        <h1>Dashboard</h1>
        <div style={{border: '1px solid #ccc', padding: '15px', marginBottom: '20px'}}>
          <h3>User Information</h3>
          <p><strong>Email:</strong> {userName}</p>
          <p><strong>Role:</strong> {role}</p>
          <button onClick={handleLogout} style={{padding: '10px 20px'}}>Logout</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{padding: '20px', maxWidth: '400px', margin: '0 auto'}}>
      <h1>State Management Experiment</h1>
      <h2>Login Page</h2>
      
      <div style={{border: '1px solid #ccc', padding: '20px', marginBottom: '20px'}}>
        <h3>Test Credentials</h3>
        <div style={{marginBottom: '15px'}}>
          <h4>Admin Account:</h4>
          <p>Email: admin@test.com</p>
          <p>Password: admin123</p>
        </div>
        <div>
          <h4>User Account:</h4>
          <p>Email: user@test.com</p>
          <p>Password: user123</p>
        </div>
      </div>

      <div style={{border: '1px solid #ccc', padding: '20px'}}>
        <form onSubmit={handleLogin}>
          <div style={{marginBottom: '15px'}}>
            <label style={{display: 'block', marginBottom: '5px'}}>Email:</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{width: '100%', padding: '8px', boxSizing: 'border-box'}}
              required 
            />
          </div>
          
          <div style={{marginBottom: '20px'}}>
            <label style={{display: 'block', marginBottom: '5px'}}>Password:</label>
            <input 
              type="password" 
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{width: '100%', padding: '8px', boxSizing: 'border-box'}}
              required 
            />
          </div>
          
          <button type="submit" style={{width: '100%', padding: '10px', fontSize: '16px'}}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;