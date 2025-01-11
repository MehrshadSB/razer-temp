import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import api from "@/services/api";
import { useEffect, useState } from "react";
import style from "./login.module.css";

const muiLoginInputTheme = {
  ".MuiInputLabel-root": {
    color: "#999",
    fontSize: "13px",
    lineHeight: "11px",
    borderRadius: "2px",
  },
  ".MuiOutlinedInput-root": {
    input: {
      fontFamily: "Roboto",
      color: "#fff",
      padding: "11.5px 15px",
      borderRadius: "2px",
    },
    fieldset: {
      border: "1px solid #999",
      borderRadius: "2px",
      fontSize: "13px",
      marginTop: "-5px",
      color: "#999",
      borderRadius: "2px",
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

function Logingin({ cookies, signin, setSignin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (cookies.accessToken) {
      router.replace("/dashboard");
    }
  }, [cookies]);

  const signinHandler = async () => {
    await api("http://localhost:3000/api/auth", {
      method: "POST",
      data: { email, password },
    });
    router.replace("/dashboard");
  };

  const alert = () => {
    console.log("inncorect data");
  };

  return (
    <div className={style.loginSection}>
      <div className={style.formSection}>
        <h1>RAZER ID LOGIN</h1>
        <div className={style.input_container}>
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
          onClick={email && password ? signinHandler : alert}
        >
          Login
        </button>
      </div>
      <div className={style.singupSection}>
        <p>Don't have a account yet?</p>
        <p onClick={() => setSignin(!signin)}>
          Create Razer ID <span style={{ color: "#44D62C" }}> {">"} </span>{" "}
        </p>
        <h3>
          <span>or continue with</span>
        </h3>
        <div className={style.items}>
          <button>
            <span>
              <img src="/logos/apple.svg" alt="apple" />
            </span>
          </button>
          <button>
            <span>
              <img src="/logos/facebook.svg" alt="facebook" />
            </span>
          </button>
          <button>
            <span>
              <img src="/logos/google.svg" alt="google" />
            </span>
          </button>
          <button className={style.twitch}>
            <span>
              <img src="/logos/twitch.svg" alt="twitch" />
            </span>
          </button>
          <button className={style.wechat}>
            <span>
              <img src="/logos/wechat.svg" alt="wechat" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logingin;
