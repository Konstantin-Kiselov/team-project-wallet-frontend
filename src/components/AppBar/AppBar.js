import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { Link } from 'react-router-dom';
import s from './AppBar.module.css';
import walletIcon from '../../img/log&reg/wallet.svg';
import walletNameIcon from '../../img/appBar/Wallet.svg';
import UserMenu from '../UserMenu/UserMenu.js';
import AuthNav from '../AuthNav/AuthNav';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link className={s.logo} to="/home">
          <img className={s.logoImg} src={walletIcon} alt="logo" />
          <img className={s.logoWord} src={walletNameIcon} alt="logo" />
        </Link>
        <UserMenu />
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </div>
    </header>
  );
}
