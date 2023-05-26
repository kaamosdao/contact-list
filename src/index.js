import ReactDOM from 'react-dom/client';
import { injectStyle } from 'react-toastify/dist/inject-style';

import init from './init.jsx';

import '../assets/styles/style.scss';

const render = () => {
  const root = ReactDOM.createRoot(document.querySelector('#root'));
  const App = init();
  injectStyle();
  root.render(App);
};

render();
