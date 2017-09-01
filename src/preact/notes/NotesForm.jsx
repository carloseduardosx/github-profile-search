import { h } from 'preact';
import Button from '../home/Button';

const NotesForm = ({ value, onInput, onSubmitNote }) => (
  <div className="notes__div--form">
    <textarea
      className="notes__textarea"
      placeholder="Insert your note here..."
      value={value}
      onInput={onInput}
    />
    <Button
      className="notes__button"
      onClick={onSubmitNote}
      label="Submit"
    />
  </div>
);

export default NotesForm;
