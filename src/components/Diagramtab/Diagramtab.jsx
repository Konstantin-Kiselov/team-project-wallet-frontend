import Table from '../Diagramtab/TableTab/TableTab';
import Chart from '../Diagramtab/Chart/Chart';
import { StatsSheet } from './styles';

export default function Hometab() {
  return (
    <>
      <StatsSheet>
      <Chart />
      <Table />
      </StatsSheet>
    </>
  );
}
