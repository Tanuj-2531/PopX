import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [agency, setAgency] = useState("");

  const handleRegister = () => {
    const user = {
      name,
      phone,
      email,
      password,
      company,
      agency,
    };

    localStorage.setItem("user", JSON.stringify(user));
    navigate("/account");
  };

  return (
    <div className="container register-container">
      <h2>Create your PopX account</h2>

      <div className="input-group">
        <label>Full Name *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Phone Number *</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Email Address *</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Password *</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Company Name</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <p className="agency-title">Are you an Agency?</p>

      <div className="agency-options">
        <label>
          <input
            type="radio"
            name="agency"
            value="Yes"
            onChange={(e) => setAgency(e.target.value)}
          />
          Yes
        </label>

        <label>
          <input
            type="radio"
            name="agency"
            value="No"
            onChange={(e) => setAgency(e.target.value)}
          />
          No
        </label>
      </div>

      <button className="primary" onClick={handleRegister}>
        Create Account
      </button>
    </div>
  );
}

export default Register;