import s from "./Login.module.css";
//import Logo from "../../components/Logo/Logo";
//import Input from "../../components/Input/Input";
//import Button from "../../components/Button/Button";

const Login = () => {
  /*const handelFunc = () => {
    alert("Helo world");
  };*/
  return (
    <div className={s.main__section}>
      {/*<form className={s.main__login}>
        <Logo />
        <Input type={"text"} placeholder={"Логин"} />
        <Input type={"password"} placeholder={"Пароль"} />
        <div className={s.error}> </div>
        <Button
          handelFunc={handelFunc}
          classNameAdd={""}
          nameButton={"Войти"}
        />
        <Button
          handelFunc={handelFunc}
          classNameAdd={"white"}
          nameButton={"Зарегистрироваться"}
        />
  </form>*/}
    </div>
  );
};

export default Login;
