import { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import Navbar from './Navbar';
import DateTimeInput from '../generic/DateTimeInput';
import { getEvents } from '../../api/event';
import { getColors } from '../../api/color';
import styles from './Dashboard.css';

export default function Dashboard() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
        await getEvents(startDate.toISOString(), endDate.toISOString())
      );
    }
    updateEvents();
  }, [startDate, endDate]);

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
          <div className={styles.inputs}>
            <label>
              Start
              <DateTimeInput value={startDate} setValue={setStartDate} />
            </label>
            <label>
              End
              <DateTimeInput value={endDate} setValue={setEndDate} />
            </label>
          </div>
          <div className={styles.chart}>
            <Pie data={data} options={options} />
          </div>
        </div>
      )}
    </div>
  );
}
