import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function LoginPage({ setUserDetails }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !address) return alert("Please fill all fields");

    setUserDetails({ name, phone, address });
    navigate("/"); 
  };

  return (
    <div className="login-page">
      <h2>Welcome to PizzaOrder</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label>
          Phone Number
          <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required />
        </label>
        <label>
          Address
          <textarea value={address} onChange={e => setAddress(e.target.value)} required />
        </label>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}
