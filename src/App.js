import './App.css';
import { Lavori } from './components/Lavori'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  <>
    <h1 id="title">Lavori in corso...</h1>
    <Lavori />
    <footer>
      <p><small>&copy; 2022 Pollicino Green</small></p>
    </footer>
  </>
  );
}

export default App;
