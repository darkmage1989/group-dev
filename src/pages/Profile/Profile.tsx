import Autorisation from "../../components/Autorisation/Autorisation";
import Button from "../../components/Button/Button";
import LessonBox from "../../components/LessonBox/LessonBox";
import Logo from "../../components/Logo/Logo";
import { useGetLessonsApiQuery } from "../../redux/apis/lessonsApi";
import s from "./Profile.module.css";
import { General } from "../../Interfaces/general";

const Profile = () => {
  const { data, isLoading, error } = useGetLessonsApiQuery(null);
  const handelFunc = () => {
    alert("Helo world");
  };
  return (
    <section className={s.profile__section}>
      <div className={s.profile__head}>
        <Logo />
        <Autorisation />
      </div>

      <div className={s.profile__title_text}>Мой профиль</div>
      <div className={s.profile__box}>
        <div>Login:</div>
        <div>Password:</div>
        <div className={s.profile__20px}></div>
        <Button
          handelFunc={handelFunc}
          classNameAdd={""}
          nameButton={"Редактировать логин"}
        />
        <Button
          handelFunc={handelFunc}
          classNameAdd={""}
          nameButton={"Редактировать пароль"}
        />
        <div className={s.profile__message}></div>
      </div>

      <div className={s.profile__title_text}>Мои курсы</div>
      <div>
      {isLoading && <div> загрузочка, но будет спинер</div>}
      {error && <div>Ошибочка, а будет еще и текс ошибочки</div>}
      {data && (
        <div className={s.lesson__box}>
          {data.data.map((item: General) => (
            <LessonBox key={item.id} title={item.title} id={item.id} />
          ))}
        </div>
      )}
      </div>
    </section>
  );
};

export default Profile;
