import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import App from './preact/App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import './styles/index.scss';

const rootElement = document.getElementById('root');

rootElement.removeChild(document.getElementById('loading'));
registerServiceWorker();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
