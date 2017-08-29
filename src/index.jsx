import { h, render } from 'preact';
import App from './preact/App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import './styles/index.scss';

registerServiceWorker();
render(<App store={store} />, document.getElementById('root'));
