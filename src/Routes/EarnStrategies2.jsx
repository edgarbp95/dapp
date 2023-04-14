import React from 'react'
import { useSelector } from 'react-redux'
import {GrMoney} from "react-icons/gr"
import stakeIcon from "../Images/icons/stake-icon.png"
import miniLogo from "../Images/logo/logo-min.png"

const EarnStrategies2 = () => {

    const {data} = useSelector((state)=> state.contract)
    console.log(data)

  return (
    <div className='section-strategies'>
        <div className='section-top-strategies'>
    
        </div> 
        <div className='section-strategies-pools'>

            <div className='strategies-pool'>
                <div className='strategies-pool-tittle'>
                    <div>
                        <img src={stakeIcon} alt="" />
                        <img className='icon-mini' src={miniLogo} alt="" />
                    </div>
                    <div>
                        <h3>Public Pool</h3>
                        <p>Token: <span>USDT</span></p>
                    </div>
                </div>
                <div>
                    <h4>Weekly Yield:</h4>
                    <p>18%</p>
                </div>
                <div>
                    <h4>Pool Size:</h4>
                    <p>750,000.000 USDT</p>
                </div>
                <div>
                    <h4>Entry:</h4>
                    <p>25.00 - 50,000.00 USDT</p>
                </div>
        
            </div>
        </div>
    </div>
  )
}

export default EarnStrategies2
