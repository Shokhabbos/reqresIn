import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  TextField,
  Button,
  Box,
  OutlinedInput,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { update_is_auth } from "../store/slices/auth";
import { myaxios } from "../helpers/api";

const Login = () => {
  const formRef = useRef();

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  let history = useNavigate();
  const submitForm = () => {
    myaxios
      .post("login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then((res) => {
        if (res.status == 200 && formRef.current.reportValidity()) {
          localStorage.setItem("token", res.data.token);
          history("/profile");
          dispatch(update_is_auth());
        }
      });
  };
  return (
    <div className="login">
      <Box className="form_box">
        <form ref={formRef}>
          <div className="form_body">
            <Typography variant="h4" color={"#1976d2"} gutterBottom>
              Login
            </Typography>
            <FormControl required>
              <TextField
                className="input"
                required
                id="outlined-required"
                label="Email"
                defaultValue=""
              />
            </FormControl>

            <FormControl>
              <InputLabel required htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                className="input"
                required
                id="outlined-adornment-password"
                label="password"
                defaultValue=""
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button
              onClick={submitForm}
              className="submit_btn"
              variant="contained"
            >
              Login
            </Button>
            <Link to="/register" className="mylink" variant="p">Forget Password?</Link>
          </div>
        </form>
      </Box>
    </div>
  );
};
export default Login;
