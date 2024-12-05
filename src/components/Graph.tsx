import { PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  PolarAreaController,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import styled from 'styled-components';

ChartJS.register(
  PolarAreaController,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const Graph = () => {
  return (
    <GraphContainer>
      <PolarArea data={data} options={options} />
    </GraphContainer>
  );
};

const data = {
  labels: ['재정계획', '의사소통', '취미공유', '가사역할', '가족관계'],
  datasets: [
    {
      label: '성향분석',
      data: [11, 16, 10, 7, 14],
      backgroundColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          return null;
        }

        const gradient = ctx.createRadialGradient(
          (chartArea.left + chartArea.right) / 2,
          (chartArea.top + chartArea.bottom) / 2,
          chartArea.width / 4,
          (chartArea.left + chartArea.right) / 2,
          (chartArea.top + chartArea.bottom) / 2,
          chartArea.width / 2
        );

        gradient.addColorStop(0, 'rgba(254, 217, 217, 0.5)');
        gradient.addColorStop(1, 'rgba(211, 231, 253, 0.5)');
        return gradient;
      }
    }
  ]
};

const options = {
  plugins: {
    legend: {
      display: false // 범례 숨기기
    }
  },
  scales: {
    r: {
      pointLabels: {
        display: true, // 그래프 둘레에 라벨 표시
        centerPointLabels: true // 라벨을 그래프 중앙에 위치시키기
      },
      ticks: {
        display: false // 원 안의 숫자 숨기기
      }
    }
  }
};

const GraphContainer = styled.div`
  width: 100%;
  height: 274px;
  background-color: var(--gr100);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Graph;
