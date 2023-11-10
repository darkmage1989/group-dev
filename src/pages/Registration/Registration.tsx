import s from "./Registration.module.css";
import Logo from "../../components/Logo/Logo";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { useRegUserMutation } from "../../redux/apis/user";
import { setSessionData } from "../../services/storage";

const Registration = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [error, setError] = useState("");
  const [registration] = useRegUserMutation();

  const loginHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target?.value) {
      setError("Логин не может быть пустым!");
    } else setError("");
    setLogin(e.target?.value);
  };
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.value.length < 5) {
      setError("Пароль должен содержать больше 5 символов! ");
      if (!e.target?.value) {
        setError("Пароль не может быть пустым!");
      }
    } else {
      setError("");
    }
    setPassword(e.target?.value);
  };

  const passwordRepeatHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.value !== password) {
      setError("Пароли не равны! ");
      if (!e.target?.value) {
        setError("Введите пароль еще раз!");
      }
    } else {
      setError("");
    }
    setPasswordRepeat(e.target?.value);
  };

  const handelFunc = (e: React.FormEvent<HTMLInputElement>) => {
    e?.preventDefault();

    if (login && password.length > 5 && password === passwordRepeat) {
      const dataForm = JSON.stringify({
        login: login,
        pass: password,
      });

      registration(dataForm).then((data) => {
        if (data?.data) {
          setSessionData(data.data?.auth_token);
          setError(data.data.detail);
        } else if (data?.error) {
          setError(data.error.data.login);
        }
      });
    }
  };

  return (
    <div className={s.main__section}>
      <form className={s.main__login}>
        <Logo />
        <Input
          value={login}
          type={"text"}
          placeholder={"Логин"}
          handelFunc={loginHandler}
        />
        <Input
          value={password}
          type={"password"}
          placeholder={"Пароль"}
          handelFunc={passwordHandler}
        />
        <Input
          value={passwordRepeat}
          type={"password"}
          placeholder={"Повторите пароль"}
          handelFunc={passwordRepeatHandler}
        />
        <div className={s.error}>{error}</div>
        <Button
          handelFunc={handelFunc}
          classNameAdd={""}
          nameButton={"Зарегистрироваться"}
        />
      </form>
    </div>
  );
};

export default Registration;
