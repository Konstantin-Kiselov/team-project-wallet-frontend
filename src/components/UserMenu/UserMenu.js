import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import exitIcon from '../../img/appBar/Group 7.svg';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.container}>
      {name ? (
        <span className={s.name}>{name}</span>
      ) : (
        <span className={s.name}>username</span>
      )}

      <button
        className={s.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        <img className={s.exitIcon} src={exitIcon} alt="" />
        <span className={s.exitWord}>Выход</span>
      </button>
    </div>
  );
}
