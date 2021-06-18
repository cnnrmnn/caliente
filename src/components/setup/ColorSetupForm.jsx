import { useEffect, useState } from 'react';
import Button from '../generic/Button';
import LabeledCheckbox from '../generic/LabeledCheckbox';
import TextInput from '../generic/TextInput';
import { getColors, updateColor } from '../../api/color';
import styles from './ColorSetupForm.css';

export default function ColorSetupForm({ setContent }) {
  const [colors, setColors] = useState([]);
  useEffect(() => {
    async function updateColors() {
      setColors(await getColors());
    }
    updateColors();
  }, []);

  async function setColor(color, body) {
    const updated = await updateColor(color.id, body);
    setColors((oldColors) =>
      oldColors.map((old) => (old.id == updated.id ? updated : old))
    );
  }

  return (
    <form onSubmit={() => setContent('calendar')}>
      <h3>Which colors should we track?</h3>
      <div className={styles.colors}>
        {colors.map((color) => (
          <LabeledCheckbox
            key={color.id}
            text={<TextInput placeholder="Label" />}
            color={color.background}
            checked={color.active}
            onClick={() => setColor(color, { active: !color.active })}
          />
        ))}
      </div>
      <Button text="Continue" />
    </form>
  );
}
