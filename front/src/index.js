import { render } from 'react-dom';
import App from './App';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(far, fas)

const root = document.querySelector('#root');

render(<App />, root);
