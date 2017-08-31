import { h } from 'preact';

const Button = ({ label }) => (
  <button className="button--material" type="button">
    <span className="label__span">{label}</span>
  </button>
);

export default Button;
