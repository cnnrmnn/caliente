import { useEffect, useState, useContext } from 'react';
import Button from '../generic/Button';
import LabeledCheckbox from '../generic/LabeledCheckbox';
import TextInput from '../generic/TextInput';
import { getColors, updateColor } from '../../api/color';
import { updateUser } from '../../api/user';
import UserContext from '../../context/user';
import styles from './ColorSetupForm.css';

export default function ColorSetupForm({ setForm }) {
  const { user, setUser } = useContext(UserContext);

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

  async function handleSubmit(event) {
    event.preventDefault();
    const updated = await updateUser(user.id, { setup: true });
    setUser(updated);
  }

  return (
    <form onSubmit={handleSubmit}>
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
        <Button text="Back" onClick={() => setForm('calendar')} />
        <Button text="Continue" type="submit" />
      </div>
    </form>
  );
}
