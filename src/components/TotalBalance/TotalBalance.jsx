import s from './TotalBalance.module.css';
import { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { authOperations } from '../../redux/auth';
import { getAllTransactions } from '../../redux/transactions/transactions-selector';

export default function TotalBalance() {
  const dispatch = useDispatch();
  const balance = useSelector(authSelectors.getUserBalance);
  const transactions = useSelector(getAllTransactions);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch, transactions]);

  return (
    <div className={s.balanceLabel}>
      <p className={s.balanceText}>ВАШ БАЛАНС:</p>
      <p className={s.balanceValue}>
        <span>₴</span> {balance}
      </p>
    </div>
  );
}

// import s from './TotalBalance.module.css';
// import { useMemo, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// // import { authSelectors, authOperations } from '../../redux/auth';
// import { fetchTransactions } from '../../redux/transactions/transactions-operations';
// import { getAllTransactions } from '../../redux/transactions/transactions-selector';

// export default function TotalBalance() {
//   const balance = useSelector(authSelectors.getUserBalance);

//   return (
//     <div className={s.balanceLabel}>
//       <p className={s.balanceText}>ВАШ БАЛАНС:</p>
//       <p className={s.balanceValue}>
//         {balance && <span>$</span>} {balance}
//       </p>
//     </div>
//   );
// }

// ============ balance with useEfect =================
// ============ DRAFT TO CHECK ========================
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchTransactions());
//   }, [dispatch]);

//   const transactions = useSelector(getAllTransactions);//
//   const balance = transactions.length === 0 ? 0 : transactions[transactions.length - 1].total;

//   return (
//     <div className={s.balanceLabel}>
//       <p className={s.balanceText}>ВАШ БАЛАНС:</p>
//       <p className={s.balanceValue}>
//         <span>$</span> {balance}
//       </p>
//     </div>
//   );
// }

// Люда

// export default function TotalBalance({ allTransactions }) {
//   // const allTransactions = useSelector(getAllTransactions);

//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch(fetchTransactions());
//   // }, [dispatch, allTransactions]);

//   // const balance = allTransactions[0];

//   // let balance;
//   // useEffect(() => {
//   //   balance = allTransactions;
//   // }, []);
//   const balance = allTransactions;

//   console.log('Это тотал', balance);

//   return (
//     <div className={s.balanceLabel}>
//       <p className={s.balanceText}>ВАШ БАЛАНС:</p>
//       <p className={s.balanceValue}>
//         {/* {balance && <span>$</span>} {balance} */}
//         {/* <span>$</span> {balance} */}
//         {/* `${total}$` */}
//         {/* {balance.total && <span>$</span>} {balance.total} */}
//       </p>
//     </div>
//   );
// }
