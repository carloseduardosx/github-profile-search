import { h } from 'preact';

const Button = ({ label, onClick, className }) => (
  <button
    className={className ? `${className} button--material` : 'button--material'}
    type="button"
    onClick={onClick}
  >
    <span className="label__span">{label}</span>
  </button>
);

export default Button;
