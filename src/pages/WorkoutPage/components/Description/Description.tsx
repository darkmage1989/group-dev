import s from "./Description.module.css";
interface DescriptionProps {
  description: Array<string | { title: string; under: Array<string> }>;
}
const Description = ({ description }: DescriptionProps) => {
  console.log(description);
  return (
    <div className={s.description__text__box}>
      {description.map((item) => {
        if (typeof item !== "string") {
          return (
            <>
                <span className={s.description__list__title}>{item.title}</span>
                <ul className={s.description__list__box}>
                    {item.under.map((item)=> <li className={s.description__list__text}>{item}</li>)}
                </ul>
              
            </>
          );
        } else {
          return <span className={s.description__text}>{item}</span>;
        }
      })}
    </div>
  );
};

export default Description;
