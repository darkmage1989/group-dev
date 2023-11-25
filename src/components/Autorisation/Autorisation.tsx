import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  clearSessionData,
  getSessionData,
  isAuthorize,
} from "../../services/storage";
import s from "./Autorisation.module.css";
import Button from "../Button/Button";
import {
  ServerResponseExit,
  useLogOutUserMutation,
} from "../../redux/apis/user";

const Autorisation = () => {
  const navigate = useNavigate();
  const [visibleExit, setVisibleExit] = useState<boolean>(false);
  const [isShowButtonExit, setIsShowButtonExit] = useState<boolean>(
    isAuthorize()
  );

  const dataUser = getSessionData();

  const [logOutUser]: any = useLogOutUserMutation();

  const handelFunc = () => {
    navigate("/login");
  };
  const toggleVisibleExit = () => {
    console.log(visibleExit);
    setVisibleExit(visibleExit === false ? true : false);
  };
  const exit = () => {
    logOutUser({ user_id: dataUser?.id, token: dataUser?.token }).then(
      (response: ServerResponseExit) => {
        console.log(response);
        clearSessionData();
        setIsShowButtonExit(false);
      }
    );
    // navigate("/");
  };

  return (
    <div>
      {isShowButtonExit ? (
        <div className={s.autorisation__login} onClick={toggleVisibleExit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <circle cx="25" cy="25" r="25" fill="#D9D9D9" />
          </svg>
          <span className={s.autorisation__text}>{dataUser.login}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
          >
            <path
              d="M12.3552 1.03308L6.67761 6.7107L0.999999 1.03308"
              stroke="black"
              stroke-width="2"
            />
          </svg>
          {visibleExit && (
            <button className={s.autorisation__exit} onClick={exit}>
              Выход
            </button>
          )}
        </div>
      ) : (
        <Button
          handelFunc={handelFunc}
          classNameAdd={"darkBlueMini"}
          nameButton={"Вход"}
        />
      )}
    </div>
  );
};

export default Autorisation;
