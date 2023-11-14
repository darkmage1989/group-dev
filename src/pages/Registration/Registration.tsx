import s from "./Registration.module.css";
import Logo from "../../components/Logo/Logo";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";
import { useRegUserMutation } from "../../redux/apis/user";
import { setSessionData } from "../../services/storage";

const Registration = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [errorText, setErrorText] = useState("");
  const [registration, { data, isLoading, error }]: any = useRegUserMutation();

  const onChangeInputs = (
    event: React.ChangeEvent<HTMLInputElement>,
    functionState: (e: string) => void
  ) => {
    functionState(event.target.value.trim());
    setErrorText("");
  };

  const registrationUser = () => {
    if (!login || !password || !passwordRepeat) {
      setErrorText("Заполните все поля!");
      return;
    }
    if (password !== passwordRepeat) {
      setErrorText("Пароли не совпадают!");
      return;
    }
    if (password.length < 5) {
      setErrorText("Пароль должен содержать 5 или более символов!");
      return;
    }

    if (login && password.length >= 5 && password === passwordRepeat) {
      const dataForm = JSON.stringify({
        login: login,
        pass: password,
      });
      registration(dataForm);
    }
  };

  if (data) {
    alert("succes");
    setSessionData(data.data?.auth_token);
  }

  useEffect(() => {
    if (error) {
      setErrorText(error.data.login);
    }
  }, [error]);

  return (
    <div className={s.main__section}>
      <div className={s.main__login}>
        <Logo />
        <Input
          value={login}
          type={"text"}
          placeholder={"Логин"}
          handelFunc={(e) => onChangeInputs(e, setLogin)}
        />
        <Input
          value={password}
          type={"password"}
          placeholder={"Пароль"}
          handelFunc={(e) => onChangeInputs(e, setPassword)}
        />
        <Input
          value={passwordRepeat}
          type={"password"}
          placeholder={"Повторите пароль"}
          handelFunc={(e) => onChangeInputs(e, setPasswordRepeat)}
        />
        <div className={s.error}>{errorText}</div>
        <Button
          handelFunc={registrationUser}
          classNameAdd={""}
          nameButton={"Зарегистрироваться"}
          isDisabled={isLoading}
        />
      </div>
    </div>
  );
};

export default Registration;
