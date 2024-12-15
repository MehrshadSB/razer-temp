import { useState } from "react";
import style from "./login.module.css";
import LoginLayout from "@/components/loginLayout/layout";
import { TextField } from "@mui/material";
import Cookies from "js-cookie";

const muiLoginInputTheme = {
  ".MuiInputLabel-root": {
    color: "#555",
    lineHeight: "12px",
    fontSize: "13px",
  },
  ".MuiOutlinedInput-root": {
    input: {
      fontFamily: "Roboto",
      color: "#fff",
      padding: "11.5px 15px",
    },
    fieldset: {
      border: "1px solid #555",
      borderRadius: "2px",
      fontSize: "13px",
      marginTop: "-5px",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #44D62C",
      color: "#555",
    },
    "&.Mui-hover fieldset": {
      color: "#555",
    },
    "&:hover:not(.Mui-focused)": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#555",
      },
    },
  },
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinHandler = async () => {
    const res = await fetch("http://127.0.0.1:8000/account/login/", {
      method: "POST",
      body: JSON.stringify({ username: email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    Cookies.set("accessToken", data.access, {
      expires: 7,
      path: "/",
    });
    Cookies.set("refreshToken", data.refresh, {
      expires: 31,
      path: "/",
    });
  };

  return (
    // <LoginLayout>
    <div className={style.container}>
      <img src="/assets/serpents-eye.jpg" alt="" />
      <div className={style.loginSection}>
        <div className={style.formSection}>
          <h1>RAZER ID LOGIN</h1>
          <div className={style.input_container}>
            <TextField
              id="outlined-basic"
              label="EMAIL ADDRESS"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              fullWidth
              sx={muiLoginInputTheme}
            />
            <TextField
              id="outlined-basic"
              type="password"
              label="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              fullWidth
              style={{ marginTop: "20px" }}
              sx={muiLoginInputTheme}
            />
          </div>
          <div className={style.forgotPass}>
            <span>Forgot Password?</span>
          </div>
          <button
            style={
              email && password
                ? { opacity: "1", cursor: "pointer" }
                : { opacity: "0.5" }
            }
            className={style.loginBtn}
            onClick={signinHandler}
          >
            Login
          </button>
        </div>
      </div>
    </div>
    // </LoginLayout>
  );
}

export default Login;
