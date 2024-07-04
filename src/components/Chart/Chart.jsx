import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { ChartContainer } from './Chart.styled';
import { data, options } from 'assets/data.jsx';

export const Chart = () => {
  return (
    <ChartContainer>
      <Line Line data={data} options={options} />
    </ChartContainer>
  );
};
