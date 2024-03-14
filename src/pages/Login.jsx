import { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/isAuthSlice";

function Login() {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("test@123");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      setError("Please enter email and password");
      return;
    }

    setEmail("");
    setPassword("");
    localStorage.setItem("isLoggedIn", "true");
    dispatch(login());
    navigate("/");
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Typography variant="h4">Login</Typography>
      </Grid>
      <Grid item sx={{ mt: 4 }}>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={!!error} // Set error prop if there's an error message
          helperText={error} // Set helper text to display the error message
          fullWidth
        />
      </Grid>
      <Grid item sx={{ mt: 2 }}>
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={!!error} // Set error prop if there's an error message
          helperText={error} // Set helper text to display the error message
          fullWidth
        />
      </Grid>
      <Grid item sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
}

export default Login;
