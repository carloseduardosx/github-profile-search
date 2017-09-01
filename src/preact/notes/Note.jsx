import { h } from 'preact';

const Note = ({ note }) => (
  <div className="note__div--container">
    <span className="note__span--description">{note.get('message')}</span>
    <span className="note__span--date">{new Date(note.get('createdAt')).toLocaleDateString()}</span>
  </div>
);

export default (Note);
