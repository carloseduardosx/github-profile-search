import { h } from 'preact';

const Repository = ({ repository }) => (
  <div className="repository__div--container">
    <a
      className="repository__a--title"
      target="_blank"
      href={repository.get('html_url')}
    >
      {repository.get('name')}
    </a>
    <span className="repository__span--description">{repository.get('description')}</span>
  </div>
);

export default Repository;
