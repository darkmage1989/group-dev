import s from "./Workout.module.css";

const Workout = () => {
  /* если тренировка выполнена добавить класс s.workout__general_ready, s.workout__title_ready, s.workout__text_ready*/
  return (
    <div className={`${s.workout__general}  ${s.workout__general_ready}`}>
      {/* если тренировка выполнена*/}
      <div className={s.workout__img}></div>
      {/*/////*/}
      <div className={`${s.workout__title}  ${s.workout__title_ready}`}>
        Красота и здоровье
      </div>
      <div className={`${s.workout__text}  ${s.workout__text_ready}`}>
        Йога на каждый день / 2 день
      </div>
    </div>
  );
};

export default Workout;
