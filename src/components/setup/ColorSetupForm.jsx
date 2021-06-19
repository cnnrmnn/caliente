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

  function mergeUpdatedColor(updated) {
    // Could use array indexes to make this more performant, but this is easier
    // to read.
    setColors((oldColors) =>
      oldColors.map((old) => (old.id == updated.id ? updated : old))
    );
  }

  function updateColorLocally(color, body) {
    const updated = { ...color, ...body };
    mergeUpdatedColor(updated);
  }

  async function setColor(color, body) {
    const updated = await updateColor(color.id, body);
    mergeUpdatedColor(updated);
  }

  return (
    <form onSubmit={() => setContent('close')}>
      <h3>Which colors should we track?</h3>
      <div className={styles.colors}>
        {colors.map((color) => (
          <LabeledCheckbox
            key={color.id}
            text={
              <TextInput
                placeholder="Label"
                value={color.name}
                setValue={(value) => updateColorLocally(color, { name: value })}
                onBlur={() => setColor(color, { name: color.name })}
              />
            }
            color={color.background}
            checked={color.active}
            onClick={() => setColor(color, { active: !color.active })}
          />
        ))}
      </div>
      <div className={styles.buttons}>
        <Button text="Back" onClick={() => setContent('calendar')} />
        <Button text="Continue" type="submit" />
      </div>
    </form>
  );
}
