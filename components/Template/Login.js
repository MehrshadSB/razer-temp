import style from "./login.module.css";
import LoginLayout from "@/components/loginLayout/layout";
import Logingin from "@/components/Module/Login/Logingin";

function Login({ cookies }) {

  return (
    <LoginLayout>
      <div className={style.container}>
        <img src="/assets/serpents-eye.jpg" alt="" />
        <Logingin cookies={cookies} />
      </div>
    </LoginLayout>
  );
}

export default Login;
