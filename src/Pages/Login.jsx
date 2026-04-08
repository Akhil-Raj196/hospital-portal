import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Demo credentials
    if (username === "demo" && password === "demo123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      setError("Invalid credentials. Use demo/demo123");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Admin Login</h2>
        {error && <div className="text-red-500 mb-2 text-center">{error}</div>}
        <input
          className="w-full border p-2 mb-4 rounded"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="w-full border p-2 mb-4 rounded"
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition mb-2"
          onClick={() => navigate('/')}
        >
          Login
        </button>
        <button
          type="button"
          className="w-full bg-gray-300 text-gray-700 py-2 rounded font-semibold hover:bg-gray-400 transition"
          onClick={() => navigate('/main')}
        >
          Cancel
        </button>
        <div className="mt-4 text-xs text-gray-500 text-center">
          Demo: demo / demo123
        </div>
      </form>
    </div>
  );
};

export default Login;
