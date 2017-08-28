import { h, render } from 'preact';
import App from './preact/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.scss';

render(<App />, document.getElementById('root'));
registerServiceWorker();
