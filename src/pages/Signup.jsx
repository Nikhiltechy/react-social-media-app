import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>

      <h1 className="text-3xl font-bold text-white mb-2">
        Create Account 🚀
      </h1>

      <p className="text-slate-400 mb-8">
        Join ConnectSphere
      </p>

      <form className="space-y-5">

        <TextField
          fullWidth
          label="Name"
          sx={{ input: { color: 'white' } }}

        />

        <TextField
          fullWidth
          label="Email"
    sx={{ input: { color: 'white' } }}

        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          sx={{ input: { color: 'white' } }}

        />

        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{ input: { color: 'white' } }}

        >
          Signup
        </Button>

      </form>

      <p className="text-slate-400 mt-6 text-center">
        Already have account?{" "}
        <Link
          to="/login"
          className="text-blue-500"
        >
          Login
        </Link>
      </p>

    </div>
  );
}

export default Signup;