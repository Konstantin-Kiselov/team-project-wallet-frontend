import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { Link } from 'react-router-dom';
import s from './AppBar.module.css';
import walletIcon from '../../img/log&reg/wallet.svg';
import walletNameIcon from '../../img/appBar/Wallet.svg';
import UserMenu from '../UserMenu/UserMenu.js';
import Container from '../Container/Container';

export default function AppBar() {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.container}>
          <Link className={s.logo} to="/home">
            <img className={s.logoImg} src={walletIcon} alt="logo" />
            <img className={s.logoWord} src={walletNameIcon} alt="logo" />
          </Link>
          <UserMenu />
        </div>
      </Container>
    </header>
  );
}
