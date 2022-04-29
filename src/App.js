import './App.css';
import { Lavori } from './components/Lavori'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Occhio from './components/Occhio';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
  <>
    <Header />
  <div>
      {/* <h1 id="title">Lavori in corso...</h1> */}
     {/* <Lavori /> */}
    </div>
    <Occhio />
    <Footer />
  </>
  );
}

export default App;
