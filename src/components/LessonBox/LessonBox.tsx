import s from "./LessonBox.module.css";
interface LessonBoxProps {
  title: string;
  id: string;
}

const LessonBox = ({ title, id }: LessonBoxProps) => {
  return (
    <div
      className={s.lesson__box}
      style={{ backgroundImage: `url("images/${id}.png")` }}
    ><span className={s.title}>{title}</span></div>
  );
};

export default LessonBox;
