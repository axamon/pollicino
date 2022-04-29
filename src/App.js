import './App.css';
import { Lavori } from './components/Lavori'
import 'bootstrap/dist/css/bootstrap.min.css';
import Occhio from './components/Occhio';


function App() {
  return (
  <div>
      <h1 id="title">Lavori in corso...</h1>
    <div className='row'>
     <Lavori />
    </div>
    {/* <Occhio /> */}
    <footer>
      <p><small>&copy; 2022 Pollicino Green</small></p>
    </footer>
  </div>
  );
}

export default App;
