import s from './Team.module.css';
import icon from '../../img/icons/icon-github.png';
import kiselov from '../../img/team/konstantin-kiselov.jpg';
import romanchenko from '../../img/team/liydmila-romanchenko.jpg';
import pryanishnikova from '../../img/team/olya-pryanishnikova.jpg';
import tarasova from '../../img/team/olha-tarasova.jpg';
import tilug from '../../img/team/dmytro-tilug.jpg';
import grishanenko from '../../img/team/sergii-grishanenko.jpg';
import kulyk from '../../img/team/yaroslav-kulyk.jpg';
import shpachynska from '../../img/team/viktoriya-shpachynska.jpg';
import lozinskiy from '../../img/team/nazariy-lozinskiy.jpg';
import romanenko from '../../img/team/kirill-romanenko.jpg';

export default function Team() {
  return (
    <div>
      <ul className={s.list}>
        <li className={s.listItem}>
          <img
            className={s.img}
            // src="./images/team/konstantin-kiselov.jpg"
            src={kiselov}
            alt="Konstantin Kiselov"
          />
          <div className={s.thumb}>
            <p className={s.name}>Konstantin</p>
            <p className={s.name}>Kiselov</p>
            <a className={s.link} href="https://github.com/Konstantin-Kiselov">
              <img className={s.iconGithub} src={icon} alt="" />
            </a>
          </div>
        </li>

        <li className={s.listItem}>
          <img className={s.img} src={romanchenko} alt="Liydmila Romanchenko" />
          <div className={s.thumb}>
            <p className={s.name}>Liydmila</p>
            <p className={s.name}>Romanchenko</p>
            <a className={s.link} href="https://github.com/LyudmilaRomanchenko">
              <img className={s.iconGithub} src={icon} alt="" />
            </a>
          </div>
        </li>

        <li className={s.listItem}>
          <img
            className={s.img}
            src={pryanishnikova}
            alt="Olya Pryanishnikova"
          />
          <div className={s.thumb}>
            <p className={s.name}>Olya</p>
            <p className={s.name}>Pryanishnikova</p>
            <a className={s.link} href="https://github.com/OlyaArta">
              <img className={s.iconGithub} src={icon} alt="" />
            </a>
          </div>
        </li>

        <li className={s.listItem}>
          <img className={s.img} src={tarasova} alt="Olha Tarasova" />
          <div className={s.thumb}>
            <p className={s.name}>Olha</p>
            <p className={s.name}>Tarasova</p>
            <a className={s.link} href="https://github.com/Olha535">
              <img className={s.iconGithub} src={icon} alt="" />
            </a>
          </div>
        </li>

        <li className={s.listItem}>
          <img className={s.img} src={tilug} alt="Dmytro Tilug" />
          <div className={s.thumb}>
            <p className={s.name}>Dmytro</p>
            <p className={s.name}>Tilug</p>
            <a className={s.link} href="https://github.com/tilugdmytro">
              <img className={s.iconGithub} src={icon} alt="" />
            </a>
          </div>
        </li>

        <li className={s.listItem}>
          <img className={s.img} src={grishanenko} alt="Sergii Grishanenko" />
          <div className={s.thumb}>
            <p className={s.name}>Sergii</p>
            <p className={s.name}>Grishanenko</p>
            <a className={s.link} href="https://github.com/serg-grish">
              <img className={s.iconGithub} src={icon} alt="" />
            </a>
          </div>
        </li>

        <li className={s.listItem}>
          <img className={s.img} src={romanenko} alt="Kirill Romanenko" />
          <div className={s.thumb}>
            <p className={s.name}>Kirill</p>
            <p className={s.name}>Romanenko</p>
            <a className={s.link} href="https://github.com/Kyle-Roman">
              <img className={s.iconGithub} src={icon} alt="" />
            </a>
          </div>
        </li>

        <li className={s.listItem}>
          <img
            className={s.img}
            src={shpachynska}
            alt="Viktoriya Shpachynska"
          />
          <div className={s.thumb}>
            <p className={s.name}>Viktoriya</p>
            <p className={s.name}>Shpachynska</p>
            <a className={s.link} href="https://github.com/shpachynska">
              <img className={s.iconGithub} src={icon} alt="" />
            </a>
          </div>
        </li>

        <li className={s.listItem}>
          <img className={s.img} src={kulyk} alt="Yaroslav Kulyk" />
          <div className={s.thumb}>
            <p className={s.name}>Yaroslav</p>
            <p className={s.name}>Kulyk</p>
            <a className={s.link} href="https://github.com/yaroslav-kulyk">
              <img className={s.iconGithub} src={icon} alt="" />
            </a>
          </div>
        </li>

        <li className={s.listItem}>
          <img className={s.img} src={lozinskiy} alt="Nazariy Lozinskiy" />
          <div className={s.thumb}>
            <p className={s.name}>Nazariy</p>
            <p className={s.name}>Lozinskiy</p>
            <a className={s.link} href="https://github.com/nazarii-lozynskyi">
              <img className={s.iconGithub} src={icon} alt="" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

////classNameName={s.modalContainer}
