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
    <div className="container">
      <h2>Create your PopX account</h2>

      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <p className="agency-title">Are you an Agency?</p>
      <div className="agency-options">
        <label>
          <input
            type="radio"
            name="agency"
            value="Yes"
            onChange={(e) => setAgency(e.target.value)}
          />{" "}
          Yes
        </label>

        <label>
          <input
            type="radio"
            name="agency"
            value="No"
            onChange={(e) => setAgency(e.target.value)}
          />{" "}
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
