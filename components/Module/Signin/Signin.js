import { use, useState } from "react";
import style from "./signin.module.css";
import { TextField } from "@mui/material";
import LoginLayout from "@/components/loginLayout/layout";

const muiLoginInputTheme = {
  ".MuiInputLabel-root": {
    color: "#999",
    fontSize: "13px",
    borderRadius: "2px",
  },
  ".MuiOutlinedInput-root": {
    input: {
      fontFamily: "Roboto",
      color: "#fff",
      borderRadius: "2px",
    },
    fieldset: {
      border: "1px solid #999",
      borderRadius: "2px",
      fontSize: "13px",
      color: "#999",
      height: "45px",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #44D62C",
      color: "#999",
      borderRadius: "2px",
    },
    "&.Mui-hover fieldset": {
      color: "#999",
      borderRadius: "2px",
    },
    "&:hover:not(.Mui-focused)": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#999",
        borderRadius: "2px",
      },
    },
  },
};

function Signin() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginLayout>
      <div className={style.container}>
        <img src="/assets/serpents-eye.jpg" alt="" />
        <div className={style.signinSection}>
          <div className={style.formSection}>
            <h1>CREATE RAZER ID</h1>
            <div className={style.input_container}>
              <TextField
                label="FIRST NAME"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                variant="outlined"
                fullWidth
                sx={muiLoginInputTheme}
              />
              <TextField
                label="LAST NAME"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                variant="outlined"
                fullWidth
                sx={muiLoginInputTheme}
              />
              <TextField
                label="EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                fullWidth
                sx={muiLoginInputTheme}
              />
              <TextField
                type="password"
                label="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                fullWidth
                sx={muiLoginInputTheme}
              />
            </div>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
}

export default Signin;
