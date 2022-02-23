import Table from '../Diagramtab/TableTab/TableTab';
import Chart from '../Diagramtab/Chart/Chart';
import { useSelector } from 'react-redux';
import { StatisticBox, StatisticsWrapper } from './styles';
import NoTransactions from '../NoTransactions/NoTransactions';
import { getAllQueryStatistics } from '../../redux/transactions/transactions-selector';

export default function Hometab() {
  const queryStatistics = useSelector(getAllQueryStatistics);

  return (
    <>
      {queryStatistics ? (
        <StatisticBox>
          <Chart />
          <StatisticsWrapper>
            <Table />
          </StatisticsWrapper>
        </StatisticBox>
      ) : (
        <NoTransactions />
      )}
    </>
  );
}
