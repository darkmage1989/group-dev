import s from "./Button.module.css";

interface BtnProps {
  classNameAdd: string;
  nameButton: string;
  isDisabled?: boolean;
  handelFunc: () => void;
}

const Button = ({
  classNameAdd,
  nameButton,
  isDisabled,

  handelFunc,
}: BtnProps) => {
  return (
    <button
      className={`${s.buttonDefault} ${s[classNameAdd]}`}
      onClick={handelFunc}
      disabled={isDisabled}
    >
      {nameButton}
    </button>
  );
};

export default Button;
