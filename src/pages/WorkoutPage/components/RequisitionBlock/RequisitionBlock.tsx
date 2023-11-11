import Button from "../../../../components/Button/Button";
import s from './RequisitionBlock.module.css'
const RequisitionBlock = () => {
  const handelFunc = () => {
    alert("Helo world");
  };
  return (
    <div className={s.requisition__block}>
      <span className={s.requisition__text}>
        Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
        выбором направления и тренера, с которым тренировки принесут здоровье и
        радость!
      </span>
      <Button
        handelFunc={handelFunc}
        nameButton={"Записаться на тренировку"}
        classNameAdd={"buttonDefault"}
      />
    </div>
  );
};

export default RequisitionBlock;
