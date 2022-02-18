import React from "react";
import 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";
import { DoughnatStat, DoughnatPie, H2, BalancePie  } from './styles';


const Chart = () => {

    const content = [31376, 51118, 63199, 41567, 21456, 55151, 31272, 21545];

    const ChartData = {
        datasets: [{
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
      
        }]
    };

    const result = content.reduce(function(sum, elem){
        return sum + elem;
    }, 0);
    
    const StatsBalance = () => {
        return <>
        {result}
        </>;
       };

       

    const pieChart = (
        <>
        <DoughnatStat>
            <H2>Статистика</H2>
            <DoughnatPie>
                <Doughnut data={ChartData}
                    // options={{
                    //     responsive: false,
                    //     maintainAspectRatio: false,
                    //     tooltips: true,
                    //     height: "2",  
                    // }}
                />
                 <BalancePie>
                     ₴<StatsBalance  />   
                 </BalancePie>
            </DoughnatPie>
        </DoughnatStat>
      </>
    );
    return pieChart;
};
export default Chart;