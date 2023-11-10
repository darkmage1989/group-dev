import s from "./Login.module.css";
import Logo from "../../components/Logo/Logo";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { useLogUserMutation } from "../../redux/apis/user";
import { setSessionData } from "../../services/storage";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginUser] = useLogUserMutation();
  const navigate = useNavigate();

  const loginHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target?.value) {
      setError("Логин не может быть пустым!");
    } else setError("");
    setLogin(e.target?.value);
  };
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target?.value) {
      setError("Пароль не может быть пустым!");
    } else {
      setError("");
    }
    setPassword(e.target?.value);
  };

  const logIn = (e: React.FormEvent<HTMLButtonElement>) => {
    e?.preventDefault();

    if (login && password) {
      const dataForm = JSON.stringify({
        login: login,
        pass: password,
      });

      loginUser(dataForm).then((data) => {
        if (data?.data) {
          setSessionData(data.data?.auth_token);
        } else if (data?.error) {
          setError(data.error.data.detail);
        }
      });
    }
  };

  const regUser = () => {
    console.log("hi");
    navigate("/registration");
  };
  return (
    <div className={s.main__section}>
      <form className={s.main__login}>
        <Logo />
        <Input
          type={"text"}
          placeholder={"Логин"}
          value={login}
          handelFunc={loginHandler}
        />
        <Input
          type={"password"}
          placeholder={"Пароль"}
          value={password}
          handelFunc={passwordHandler}
        />
        <div className={s.error}>{error}</div>
        <Button handelFunc={logIn} classNameAdd={""} nameButton={"Войти"} />
        <Button
          handelFunc={regUser}
          classNameAdd={"white"}
          nameButton={"Зарегистрироваться"}
        />
      </form>
    </div>
  );
};

export default Login;
