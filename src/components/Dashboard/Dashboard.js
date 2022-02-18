import violetEllipse from '../../img/log&reg/ellipse_violet.svg';
import pinkEllipse from '../../img/log&reg/ellipse_pink.svg';
import s from './Dashboard.module.css';

export default function AppBar() {
  return (
    <div>
      <img className={s.ellipse} src={violetEllipse} alt="logo" />
      <img className={s.logoWord} src={pinkEllipse} alt="logo" />
    </div>
  );
}
