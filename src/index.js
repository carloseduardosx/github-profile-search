import { h, render } from 'preact';
import './styles/index.css';
import App from './preact/App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();

// TODO Prepare project infrastructure
// TODO Prepare project API usage
// TODO Prepare project features
