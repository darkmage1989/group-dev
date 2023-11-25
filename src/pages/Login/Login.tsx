import s from "./Login.module.css";
import Logo from "../../components/Logo/Logo";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { useLogUserMutation } from "../../redux/apis/user";
import { useNavigate } from "react-router-dom";
import { setSessionData } from "../../services/storage";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [loginUser, { data, isLoading, error }]: any = useLogUserMutation();
  const navigate = useNavigate();

  const onChangeInputs = (
    event: React.ChangeEvent<HTMLInputElement>,
    functionState: (e: string) => void
  ) => {
    functionState(event.target.value.trim());
    setErrorText("");
  };

  const logIn = () => {
    if (!login || !password) {
      setErrorText("Заполните все поля!");
      return;
    }

    const dataForm = JSON.stringify({
      login: login,
      pass: password,
    });

    loginUser(dataForm);
  };

  if (data) {
    setSessionData(data.data?.auth_token, data.data?.user_id, login);
    navigate("/");
  }

  useEffect(() => {
    if (error) {
      setErrorText(error.data.detail);
    }
  }, [error]);

  const regUser = () => {
    navigate("/registration");
  };

  return (
    <div className={s.main__section}>
      <div className={s.main__login}>
        <Logo />
        <Input
          type={"text"}
          placeholder={"Логин"}
          value={login}
          handelFunc={(e) => onChangeInputs(e, setLogin)}
        />
        <Input
          type={"password"}
          placeholder={"Пароль"}
          value={password}
          handelFunc={(e) => onChangeInputs(e, setPassword)}
        />
        <div className={s.error}>{errorText}</div>
        <Button
          handelFunc={logIn}
          classNameAdd={""}
          nameButton={"Войти"}
          isDisabled={isLoading}
        />
        <Button
          handelFunc={regUser}
          classNameAdd={"white"}
          nameButton={"Зарегистрироваться"}
        />
      </div>
    </div>
  );
};

export default Login;
