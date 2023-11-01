import s from "./Button.module.css";

type BtnProps = {
  classNameAdd: string;
  nameButton: string;
  hendelFunc: () => void;
};

const Button = (props: BtnProps) => {
  return (
    <button
      className={`${s.buttonDefault} ${s[props.classNameAdd]}`}
      onClick={props.hendelFunc}
    >
      {props.nameButton}
    </button>
  );
};

export default Button;
