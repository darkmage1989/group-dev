import { useParams } from "react-router-dom";
import { useGetLessonIdQuery } from "../../redux/apis/lessonsApi";
import s from "./WorkoutPage.module.css";
import Logo from "../../components/Logo/Logo";
import { DataId } from "../../Interfaces/dataId";
import Description from "./components/Description/Description";
import RequisitionBlock from "./components/RequisitionBlock/RequisitionBlock";
import Suitable from "./components/Suitable/Suitable";

const WorkoutPage = () => {
  const params = useParams();
  const lessonId = params.id;
  const { data, error, isLoading } = useGetLessonIdQuery(lessonId);
  if (isLoading) {
    return <div></div>;
  }
  if (error) {
    // обработка ошибки
    if ("status" in error) {
      const message =
        "error" in error ? error.error : JSON.stringify(error.data);
      return (
        <div>
          <span>message={message}/</span>
        </div>
      );
    } else {
      return <div>{error.message}</div>;
    }
  }
  const response: DataId = data.data[0];
  return (
    <section className={s.workout}>
      <Logo />
      <Suitable response={response} />
      <div
        className={s.workout__title__box}
        style={{ backgroundImage: `url("/images/${lessonId}.png")` }}
      >
        <h1 className={s.title}>{response.title}</h1>
      </div>
      <div>
        <h3 className={s.workout__list__title}>Направления:</h3>
        <ul className={s.workout__directions__list__box}>
          {response.directions.map((item, index) => (
            <li className={s.workout__directions__list__item} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Description description={response.description} />
      <RequisitionBlock />
    </section>
  );
};

export default WorkoutPage;
