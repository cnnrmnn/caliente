import Navbar from './Navbar';
import { Pie } from 'react-chartjs-2';
import styles from './Dashboard.css';

const data = {
  labels: [' Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: 'black',
      borderWidth: 2,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'white',
      bodyColor: 'black',
      titleFont: {
        family: 'Inter',
      },
    },
  },
};

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.chart}>
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
