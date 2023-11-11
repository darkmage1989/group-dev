import { DataId } from "../../../../Interfaces/dataId";
import s from './Suitable.module.css'
interface SuitableProps {
    response: DataId;
}
 
const Suitable = ({response}:SuitableProps) => {
    return ( <div>
        <h3 className={s.workout__list__title}>Подойдет для вас если:</h3>
        <ol className={s.workout__list__box}>
          {response.similarity.map((item, index: number) => (
            <li key={index} className={s.workout__list__item}><div className={s.workout__list__text}>{item}</div></li>
          ))}
        </ol>
      </div> );
}
 
export default Suitable;