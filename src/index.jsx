import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import App from './preact/App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import './styles/index.scss';

registerServiceWorker();
render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
