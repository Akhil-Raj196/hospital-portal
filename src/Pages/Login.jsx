import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const normalizedUsername = username.trim().toLowerCase();
    const normalizedPassword = password.trim();

    if (normalizedUsername === "demo" && normalizedPassword === "demo123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/", { replace: true });
    } else {
      setError("Invalid credentials. Use demo/demo123");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4 py-6 sm:px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-2xl bg-white p-5 shadow-lg sm:p-8"
      >
        <h2 className="mb-6 text-center text-2xl font-bold text-blue-700 sm:text-3xl">Admin Login</h2>
        {error && <div className="mb-2 text-center text-sm text-red-500 sm:text-base">{error}</div>}
        <input
          className="mb-4 w-full rounded border p-3 text-base sm:text-lg"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="mb-4 w-full rounded border p-3 text-base sm:text-lg"
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div className="flex flex-col sm:flex-row gap-2 mt-2">
          <button type="submit" className="mb-2 w-full rounded bg-blue-600 py-2 text-white transition hover:bg-blue-700 sm:mb-0 sm:w-1/2">
            Login
          </button>
          <button
            type="button"
            className="w-full rounded bg-gray-300 py-2 text-gray-700 transition hover:bg-gray-400 sm:w-1/2"
            onClick={() => navigate('/main', { replace: true })}
          >
            Cancel
          </button>
        </div>
        <div className="mt-4 text-center text-xs text-gray-500 sm:text-sm">
          Demo: <span className="font-mono">demo</span> / <span className="font-mono">demo123</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
