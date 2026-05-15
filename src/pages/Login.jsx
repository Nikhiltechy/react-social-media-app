import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

const login = useAuthStore(
  (state) => state.login
);

const [formData, setFormData] =
  useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]:
      e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  const success = login(
    formData.email,
    formData.password
  );

  if (success) {
    navigate("/");
  } else {
    alert("Invalid credentials");
  }
};

  return (
    <div>

      <h1 className="text-3xl font-bold text-white mb-2">
        Welcome Back 👋
      </h1>

      <p className="text-slate-400 mb-8">
        Login to your account
      </p>

      <form className="space-y-5"  onSubmit={handleSubmit}>

        <TextField
          fullWidth
          name="email"
          label="Email"
          variant="outlined"
          sx={{ input: { color: 'white' } }}
          onChange={handleChange}

        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          sx={{ input: { color: 'white' } }}
          onChange={handleChange}

        />

        <Button
         type="submit"
          variant="contained"
          fullWidth
          size="large"
        >
          Login
        </Button>

      </form>

      <p className="text-slate-400 mt-6 text-center">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="text-blue-500"
        >
          Signup
        </Link>
      </p>

    </div>
  );
}

export default Login;