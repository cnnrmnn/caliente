import { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import Navbar from './Navbar';
import { getEvents } from '../../api/event';
import { getColors } from '../../api/color';
import styles from './Dashboard.css';

export default function Dashboard() {
  const [colors, setColors] = useState();

  useEffect(() => {
    async function updateColors() {
      setColors(await getColors());
    }
    updateColors();
  }, []);

  const [events, setEvents] = useState();

  useEffect(() => {
    async function updateEvents() {
      setEvents(
        await getEvents('2021-05-16T23:54:59+00:00', '2021-06-30T12:00:00.000Z')
      );
    }
    updateEvents();
  }, []);

  let labels = [],
    statistics = [],
    backgrounds = [];

  if (colors && events) {
    for (const color of colors) {
      if (color.active) {
        let duration = events[color.id];
        if (typeof duration == 'string') {
          const split = duration.split('/');
          duration = split[0] / split[1];
        }
        statistics.push(duration);
        labels.push(` ${color.name}`);
        backgrounds.push(color.background);
      }
    }
  }

  const data = {
    labels: labels,
    datasets: [
      {
        data: statistics,
        backgroundColor: backgrounds,
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
        bodyFont: {
          family: 'Inter',
          weight: '500',
        },
      },
    },
  };

  return (
    <div className={styles.dashboard}>
      <Navbar />
      {events && (
        <div className={styles.container}>
          <div className={styles.chart}>
            <Pie data={data} options={options} />
          </div>
        </div>
      )}
    </div>
  );
}
