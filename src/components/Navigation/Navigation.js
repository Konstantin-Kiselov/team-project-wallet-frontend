import { NavLink } from 'react-router-dom';
import homeMobileIcon from '../../img/homeview/homeMobileIcon.svg';
import statsMoileIcon from '../../img/homeview/statsMobileIcon.svg';
import statsTabletIcon from '../../img/homeview/statsTabletIcon.svg';
import currencyMobileIcon from '../../img/homeview/currencyMobileIcon.svg';
import homeDescIcon from '../../img/homeview/homeDescIcon.svg';
import s from './Navigation.module.css';
import Media from 'react-media';

export default function Navigation() {
  return (
    <>
      <NavLink to="/home/hometab">
        <Media queries={{ small: { maxWidth: 767 } }}>
          {matches =>
            matches.small ? (
              <img className={s.icon} src={homeMobileIcon} alt="homepage" />
            ) : (
              <div className={s.navItem}>
                <img className={s.icon} src={homeDescIcon} alt="homepage" />
                <p>Главная</p>
              </div>
            )
          }
        </Media>
      </NavLink>
      <NavLink to="/home/diagramtab">
        <Media queries={{ small: { maxWidth: 767 } }}>
          {matches =>
            matches.small ? (
              <img className={s.icon} src={statsMoileIcon} alt="diagram" />
            ) : (
              <div className={s.navItem}>
                <img className={s.icon} src={statsTabletIcon} alt="diagram" />
                <p>Статистика</p>
              </div>
            )
          }
        </Media>
      </NavLink>
      <Media
        query="(max-width: 767px)"
        render={() => (
          <NavLink to="/home/currency">
            <img className={s.icon} src={currencyMobileIcon} alt="currency" />
          </NavLink>
        )}
      />
    </>
  );
}
