import './assets/App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route,Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import Vote from './pages/Vote/Vote';
import Collection from './pages/Collections/Collection';
import EarnDinamic from './pages/Earns/EarnDinamic';
import Menu from './Components/Menu';
import Header from './Components/Header';
import ConnectWallet from './Components/ConnectWallet';
import { loadData, addDataContracts } from './reducers/contractSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Loading from './Components/Loading';

function App() {
  const [modal,setModal] = useState(false)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    AOS.init()
  },[])

  async function loadData() {
    try {
      const response = await axios.get('http://localhost:5000/contracts');
      const data = response.data;
      dispatch(addDataContracts(data))
     
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(()=>{

    // axios.get('http://localhost:5000/contracts')
    // .then(response => {
    //   dispatch(addDataContracts(response.data))
    // })
    // .catch(error => {
    //   console.error(error);
    // });

    loadData()

    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };

  },[])

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
    <>
      <div className='container-all'>
          <Menu />
          <ConnectWallet toggleModal={toggleModal} modal={modal}/>
          <div className='container-right'>
            <Header toggleModal={toggleModal} />
            <div className='container-routes'>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/vote" element={<Vote />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/earn-strategies/:name" element={<EarnDinamic />} />
              </Routes>
            </div>
          </div>
        </div>      
    </>
  );
}

export default App;
