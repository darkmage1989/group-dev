import s from "./Input.module.css";

interface InputProps {
  placeholder: string;
  type: string;
  value: string;
  handelFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, type, value, handelFunc }: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      className={s.input}
      placeholder={placeholder}
      onChange={handelFunc}
    ></input>
  );
};
export default Input;
