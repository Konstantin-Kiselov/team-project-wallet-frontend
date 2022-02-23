import React from 'react';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { DoughnatStat, DoughnatPie, Title, BalancePie } from './styles';

import { useSelector } from 'react-redux';
import { getAllQueryStatistics } from '../../../redux/transactions/transactions-selector';;

export default function Chart() {
  const queryStatistics = useSelector(getAllQueryStatistics);
  let amount = [];
 if(queryStatistics.stats) {
  queryStatistics.stats.map((item) => {
    amount.push(item.amount)
  })
 }
  const ChartData = {
    datasets: [
      {
        data: amount,
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
        cutout: 105,
        hoverOffset: 4,
      },
    ],
  };
  const pieChart = (
    <>
      <DoughnatStat>
        <Title>Статистика</Title>
        <DoughnatPie>
          <Doughnut
          type="pie"
          width={130}
          height={50}
          options={{
            plugins: {
                legend: {
                    display: false,
                }
            }
          }}
            data={ChartData}
          
          />
          <BalancePie>
            ₴{queryStatistics.expense}
          </BalancePie>
        </DoughnatPie>
      </DoughnatStat>
    </>
  );
  return pieChart;
}
