import logo from './logo.svg';
import './App.scss';
import Home from './Routes/Home';
import Vote from './Routes/Vote';
import EarnStrategies from './Routes/EarnStrategies';
import Collection from './Routes/Collection';
import Menu from './Components/Menu';
import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import EarnTemplate from './Components/EarnTemplate';
import EarnDinamic from './Routes/EarnDinamic';


function App() {
  
  return (
    <div className='container-all'>
      <Menu />
      <div className='container-right'>
        <Header />
        <div className='container-routes'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/vote" element={<Vote />} />
            {/* <Route path="/earn-strategies/weekly4" element={<EarnStrategies />} /> */}
            <Route path="/collection" element={<Collection />} />
            <Route path="/earn-strategies/:name" element={<EarnDinamic />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
