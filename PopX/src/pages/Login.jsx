import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Signin to your PopX account</h2>

      <input placeholder="Email address" />
      <input type="password" placeholder="Password" />

      <button className="primary" onClick={() => navigate("/account")}>
        Login
      </button>
    </div>
  );
}

export default Login;