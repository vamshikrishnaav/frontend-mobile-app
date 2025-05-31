import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/LoginPage.css";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name || !phone || !password) {
      return alert("Please fill all fields");
    }
    // Simulate successful login
    alert("Login successful!");
    navigate("/"); // Redirect to home or dashboard
  };

  return (
    <div className="login-page">
      <h2>Login to PizzaOrder</h2>
      <form onSubmit={handleLogin}>
        <label>
          Full Name
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Phone Number
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
