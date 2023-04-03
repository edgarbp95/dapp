import React from 'react'
import Slider from '../Components/Slider'
import {FiUsers} from "react-icons/fi"
import {BsGraphUp} from "react-icons/bs"
import {MdOutlineHandshake} from "react-icons/md"

const Home = () => {
  return (
    <div className='container-route'>
        
      <Slider />
      <div className='container-cards'>
        <div className='container-cards-item'>
            <div className='container-cards-item-icon'>
                <FiUsers size={"25px"}/>
            </div>
            <h2>1 million <span>users</span></h2>
        </div>
        <div className='container-cards-item'>
            <div className='container-cards-item-icon'>
                <BsGraphUp size={"25px"}/>
            </div>
            <h2>10 million <span>trades</span></h2>
        </div>
        <div className='container-cards-item'>
            <div className='container-cards-item-icon'>
                <MdOutlineHandshake size={"25px"}/>
            </div>
            <h2>$2 million <span>staked</span></h2>
        </div>
      </div>
    </div>
  )
}

export default Home
