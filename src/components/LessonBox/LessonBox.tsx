import s from "./LessonBox.module.css";
import { Link } from "react-router-dom";
interface LessonBoxProps {
  title: string;
  id: string;
}

const LessonBox = ({ title, id }: LessonBoxProps) => {
  return (
    <div
      className={s.lesson__box}
      style={{ backgroundImage: `url("images/${id}.png")` }}
    >
      <Link to={`workout/${id}`}>
        <span className={s.title}>{title}</span>
      </Link>
    </div>
  );
};

export default LessonBox;
