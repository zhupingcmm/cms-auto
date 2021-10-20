import { render } from 'react-dom';
import { Hello } from './components/Hello';
import './style/index.scss';

function App() {
  return <Hello name="zp" className="contend" />;
}

render(<App />, document.getElementById('root'));
