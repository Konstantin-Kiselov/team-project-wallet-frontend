import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import Media from 'react-media';
import sprite from '../../img/homeview/svg_sprite.svg';

export default function Navigation() {
  return (
    <>
      <NavLink
        to="/home/hometab"
        className={s.link}
        activeClassName={s.activelink}
      >
        <Media queries={{ small: { maxWidth: 767 } }}>
          {matches =>
            matches.small ? (
              <svg className={s.icon} width="44" height="44" fill="#6E78E8">
                <use href={sprite + '#icon-home'}></use>
              </svg>
            ) : (
              <div className={s.navItem}>
                <svg className={s.icon} width="18" height="18" fill="#6E78E8">
                  <use href={sprite + '#icon-home'}></use>
                </svg>
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
              <svg className={s.icon} width="44" height="44" fill="#6E78E8">
                <use href={sprite + '#icon-stats'}></use>
              </svg>
            ) : (
              <div className={s.navItem}>
                <svg className={s.icon} width="18" height="18" fill="#6E78E8">
                  <use href={sprite + '#icon-stats'}></use>
                </svg>
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
            <svg
              className={s.icon}
              width="44"
              height="44"
              fill="#6E78E8"
              margin-bottom="20"
            >
              <use href={sprite + '#icon-currency'}></use>
            </svg>
          </NavLink>
        )}
      />
    </>
  );
}
