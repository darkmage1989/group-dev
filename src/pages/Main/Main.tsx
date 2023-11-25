import { General } from "../../Interfaces/general";
import Button from "../../components/Button/Button";
import LessonBox from "../../components/LessonBox/LessonBox";
import Logo from "./components/Logo/Logo";
import { useGetLessonsApiQuery } from "../../redux/apis/lessonsApi";
import s from "./Main.module.css";
import Union from "./components/Union/Union";
import Autorisation from "../../components/Autorisation/Autorisation";
const Main = () => {
  const { data, isLoading, error } = useGetLessonsApiQuery(null);
  const handelFunc = () => {
    alert("Helo world");
  };
  return (
    <section className={s.main__section}>
      <div className={s.head}>
        <Logo />
        <Autorisation />
      </div>
      <div className={s.text__box}>
        <div>
          <span className={s.main__text}>
            Онлайн-тренировки для занятий дома
          </span>
          <h2 className={s.main__title}>
            Начните заниматься спортом <br /> и улучшите качество жизни
          </h2>
        </div>
        <div className={s.union}>
          <Union />
        </div>
      </div>
      {isLoading && <div> загрузочка, но будет спинер</div>}
      {error && <div>Ошибочка, а будет еще и текс ошибочки</div>}
      {data && (
        <div className={s.lesson__box}>
          {data.data.map((item: General) => (
            <LessonBox key={item.id} title={item.title} id={item.id} />
          ))}
        </div>
      )}
      <div className={s.nav__box}>
        <Button
          handelFunc={handelFunc}
          classNameAdd={"green"}
          nameButton={"Наверх ↑"}
        />
      </div>
    </section>
  );
};

export default Main;
