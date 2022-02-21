import Table from '../Diagramtab/TableTab/TableTab';
import Chart from '../Diagramtab/Chart/Chart';
import { StatisticBox, StatisticsWrapper } from './styles';

export default function Hometab() {
  return (
    <>
      <StatisticBox>
      <Chart />
      <StatisticsWrapper>
        <Table />
      </StatisticsWrapper>
      </StatisticBox>
    </>
  );
}
