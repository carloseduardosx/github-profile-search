import { h } from 'preact';

const Button = ({ label, onClick }) => (
  <button
    className="button--material"
    type="button"
    onClick={onClick}
  >
    <span className="label__span">{label}</span>
  </button>
);

export default Button;
