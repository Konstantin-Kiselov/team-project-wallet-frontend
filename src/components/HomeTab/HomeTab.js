import { useState, useEffect } from 'react';
import transactions from './transactions.json';

export default function HomeTab() {
  const [status, setStatus] = useState('idle');
  const [transInfo, setTransInfo] = useState(null);

  //   useEffect(() => {
  //     transactions
  //       .map()
  //       .then(response => {
  //         setTransInfo();

  //         setStatus('resolved');
  //       })
  //       .catch(error => {
  //         setStatus('rejected');
  //       });
  //   }, []);

  return (
    <div className="s.container">
      <div className="s.titleBar"></div>
      <table className="s.table">
        <thead className="s.titles">
          <tr>
            <th>Дата</th>
            <th>Тип</th>
            <th>Категория</th>
            <th>Комментарий</th>
            <th>Сумма</th>
            <th>Баланс</th>
          </tr>
        </thead>
        {status === 'resolved' && (
          <tbody>
            {transInfo.map((transactions, i) => {
              return (
                <>
                  <tr key={i}>
                    <td>{transactions.date}</td>
                    <td>{transactions.type}</td>
                    <td>{transactions.category}</td>
                    <td>{transactions.comment}</td>
                    <td>{transactions.sum}</td>
                    <td>{transactions.balance}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
}
