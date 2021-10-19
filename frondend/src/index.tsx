import { render } from 'react-dom';
import { Hello } from './components/Hello';

function App() {
  return <Hello name="zp" />;
}

render(<App />, document.getElementById('root'));
