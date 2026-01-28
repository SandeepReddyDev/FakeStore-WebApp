import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye,FaRegEyeSlash  } from "react-icons/fa";
import UsercredsComponent from "../../Components/UserCreds";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
   const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <UsercredsComponent/>
      <form className="login-card" onSubmit={handleLogin}>
        <img
          src="https://i.pinimg.com/736x/4b/a6/38/4ba638209ce7f96151d138879dbf03f6.jpg"
          alt="ShopKart Logo"
          className="login-logo"
        />

        <h1>Welcome to ShopKart</h1>
        <p className="subtitle">Your one-stop shop for everything</p>

        {error && <p className="error-text">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={email}
          className="input"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
     <div className="password-wrapper">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    className="input"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
  />

  <span
    className="password-toggle-icon"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
  </span>
</div>

       
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
