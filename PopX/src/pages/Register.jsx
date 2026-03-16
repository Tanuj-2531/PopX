import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Create your PopX account</h2>

      <input placeholder="Full Name" />
      <input placeholder="Phone Number" />
      <input placeholder="Email Address" />
      <input placeholder="Password" />
      <input placeholder="Company Name" />

      <p>Are you an Agency?</p>

      <label>
        <input type="radio" name="agency" /> Yes
      </label>

      <label>
        <input type="radio" name="agency" /> No
      </label>

      <button className="primary" onClick={() => navigate("/account")}>
        Create Account
      </button>
    </div>
  );
}

export default Register;