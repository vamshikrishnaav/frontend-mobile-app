import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Registration.css"; // You can rename this to Registration.css if needed

export default function RegistrationPage({ setUserDetails }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !address || !password) {
      return alert("Please fill all fields");
    }

    // You can store password securely on server/backend; not advisable in frontend state
    setUserDetails({ name, phone, address });
    
    // ✅ Navigate to Login Page after registration
    navigate("/login");
  };

  return (
    <div className="login-page">
      <h2>Register to PizzaOrder</h2>
      <form onSubmit={handleSubmit}>
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
          Address
          <textarea
            value={address}
            onChange={e => setAddress(e.target.value)}
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
