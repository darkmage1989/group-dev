import s from "./Button.module.css";

interface BtnProps {
  classNameAdd: string;
  nameButton: string;
  handelFunc: (e: any) => void;
}

const Button = ({ classNameAdd, nameButton, handelFunc }: BtnProps) => {
  return (
    <button
      className={`${s.buttonDefault} ${s[classNameAdd]}`}
      onClick={handelFunc}
    >
      {nameButton}
    </button>
  );
};

export default Button;
