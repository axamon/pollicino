import './App.css';
import { Lavori } from './components/Lavori'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Occhio from './components/Occhio';
import Header from './components/Header';
import Footer from './components/Footer';
import Perpetual from './components/Perpetual';


function App() {
  return (
  <>
    <Header />
  <div>
      {/* <h1 id="title">Lavori in corso...</h1> */}
     {/* <Lavori /> */}
    </div>
    <div id="axios">
      <Perpetual cid="QmThsu1htroEEDSmQZ8r48F1Wmzjw2fuj7tt8F8PbzXuYH" />
    </div>
    <Occhio />
    <Footer />

  </>
  );
}

export default App;
