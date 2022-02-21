import React from 'react';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { DoughnatStat, DoughnatPie, Title, BalancePie } from './styles';

// import { useSelector } from 'react-redux';
// import { getStatistics } from '';

export default function Chart() {
  const content = [31376, 51118, 63199, 41567, 21456, 55151, 31272, 21545];
  // const content = useSelector(state => getStatistics(state));

  const ChartData = {
    datasets: [
      {
        data: content,
        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        borderWidth: 1,
        cutout: 99,
      },
    ],
  };

  const result = content.reduce(function (sum, elem) {
    return sum + elem;
  }, 0);

  const StatsBalance = () => {
    return <>{result}</>;
  };

  const pieChart = (
    <>
      <DoughnatStat>
        <Title>Статистика</Title>
        <DoughnatPie>
          <Doughnut
            data={ChartData}
          
          />
          <BalancePie>
            ₴<StatsBalance />
          </BalancePie>
        </DoughnatPie>
      </DoughnatStat>
    </>
  );
  return pieChart;
}
