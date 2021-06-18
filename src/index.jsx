import { render } from 'react-dom';
import App from './App';
import './root.css';

const root = document.getElementById('root');
root.style.height = '100%';
render(<App />, root);
