import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import s from './Main.module.css'
import Union from "./components/Union/Union";
const Main = () => {
    const handelFunc = ()=> {
        alert('Helo world')
    }
    return ( <section className={s.main__section}>
        <div className={s.head}>
        <Logo/>
        <Button handelFunc={handelFunc} classNameAdd={'buttonDefault'} nameButton={'Вход'} />
        </div>
        <div className={s.text__box}>
            <div >
                <span className={s.main__text}>Онлайн-тренировки для занятий дома</span>
                <h2 className={s.main__title}>Начните заниматься спортом <br /> и улучшите качество жизни</h2>
            </div>
            <div className={s.union}><Union/></div>
        </div>
    </section> );
}
 
export default Main;