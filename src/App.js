import './App.scss';
import { Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './Routes/Home';
import Vote from './Routes/Vote';
import Collection from './Routes/Collection';
import EarnDinamic from './Routes/EarnDinamic';
import EarnStrategies from './Routes/EarnStrategies';
import Menu from './Components/Menu';
import Header from './Components/Header';
import ConnectWallet from './Components/ConnectWallet';



function App() {
  const [modal,setModal] = useState(false)
  function disableScroll() {
    document.body.classList.add("stop-scrolling");
  }
  function enableScroll() {
    document.body.classList.remove("stop-scrolling");
  }
  const toggleModal = ()=>{
    setModal(!modal)
    console.log(modal)
    if(window.innerWidth<800 && !modal){
        disableScroll()
    }else if(window.innerWidth<800 && modal){
        enableScroll()
    }
    }

  return (
    <div className='container-all'>
      <Menu />
      <ConnectWallet toggleModal={toggleModal} modal={modal}/>
      <div className='container-right'>
        <Header toggleModal={toggleModal} />
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
