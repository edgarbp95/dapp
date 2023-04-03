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


function App() {
  
  return (
    <div className='container'>
      <Menu />
      <div className='container-right'>
        <Header />
        <div className='container-routes'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/earn-strategies" element={<EarnStrategies />} />
            <Route path="/collection" element={<Collection />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
