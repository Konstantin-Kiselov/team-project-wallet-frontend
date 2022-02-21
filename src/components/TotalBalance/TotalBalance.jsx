import s from './TotalBalance.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function TotalBalance() {
  const balance = useSelector(authSelectors.getUserBalance);
  console.log(balance);

  return (
    <div className={s.balanceLabel}>
      <p className={s.balanceText}>ВАШ БАЛАНС:</p>
      <p className={s.balanceValue}>
        {balance && <span>$</span>} {balance}
      </p>
    </div>
  );
}
