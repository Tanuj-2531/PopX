import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="container login-container">
      <h2>Signin to your PopX account</h2>

      <p className="login-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="input-group">
        <label>Email Address</label>
        <input type="email" placeholder="Enter email address" />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
      </div>

      <button className="primary" onClick={() => navigate("/account")}>
        Login
      </button>
    </div>
  );
}

export default Login;