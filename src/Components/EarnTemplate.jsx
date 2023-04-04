import React, { useEffect, useRef, useState } from 'react'
import {FaUserAlt} from "react-icons/fa"
import Button2 from './Button2'
import Table from './Table'

const EarnTemplate = ({strategy,risk,pool,min,max,token,progress}) => {

    const [deposit,setDeposit] = useState()
    const bar = useRef()
    const poolSize = parseFloat(pool)
    const progressParse = parseFloat(progress)
    const percent = progressParse * 100 / poolSize + "%"
    const balance = 500
    const stake = 3000
    const pendingEarn = 3000*27/100
    const totalPayout = stake + pendingEarn

    //cambiar el width de la barra segun el %
    useEffect(()=>{
        bar.current.style.width= `${percent}`
    },[progress])

    //CONTADOR
    const [seconds,setSeconds] = useState()
    const [minutes,setMinutes] = useState()
    const [hours,setHours] = useState()
    const [days,setDays] = useState()
    const DATE_TARGET = new Date('4/10/2023 0:01 AM');
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24
   

    const counter = ()=>{
        const NOW = new Date()
        const DURATION = DATE_TARGET - NOW;
        const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
        const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
        setSeconds(REMAINING_SECONDS)
        setMinutes(REMAINING_MINUTES)
        setHours(REMAINING_HOURS)
        setDays(REMAINING_DAYS)
    }

    setInterval(counter, MILLISECONDS_OF_A_SECOND);

  return (
    <div className='earn-strategies'>
        <div className='section-top'>
            <div className='strategies'>
                <div className='strategies-txt'>
                    <p>BENFT WEEKLY EARN 5</p>
                    <h3>Weekly yield: 27%</h3>
                </div>
                <div className='strategies-txt-details'>
                    <h4>Strategy type: <span>{strategy}</span></h4>
                    <h4>Risk: <span>{risk}</span></h4>
                    <h4>Pool size: <span>{pool} USDT</span></h4>
                    <h4>Min entry: <span>{min} USDT</span></h4>
                    <h4>Max entry: <span>{max} USDT</span></h4>
                    <h4>Token: <span>{token}</span></h4>
                </div>
            </div>
            <div className='progress-section'>
                <h3><FaUserAlt size={"20px"}/> Progress in Pool</h3>
                <div className='progress-bar'>
                    <div ref={bar} className='bar'>
                        
                    </div>
                    <p className='min' >0</p>
                    <p className='bar-detail'>{progress}</p>
                    <p className='max' >{poolSize}</p>
                </div>
                <div>
                    <Button2 txt="Approve"/>
                </div>

                <div className='details-staked'>

                <div className='details-staked-input'>
                    <div>
                        <input className='input-deposit' type="number" onChange={(e)=>{setDeposit(e.target.value)}} />
                        <button className='btn2'>Deposit</button>
                    </div>
                    <p>Your balance: <span>{balance} $USDT</span></p>
                </div>

                <div className='table-staked'>
                    <div className='table-row row1'>
                        <div><h3>Your stake:</h3></div>
                        <p className='table-number'>{stake} USDT</p>
                    </div>
                    <div className='table-row row1'>
                        <div><h3>Pending Earn:</h3></div>
                        <p className='table-number'>{pendingEarn} USDT</p>
                    </div>
                    <div className='table-row '>
                        <div><h3>Total payout:</h3></div>
                        <p className='table-number'>{totalPayout} USDT</p>
                    </div>
                </div>
                <button className='btn2'>
                    <p className='text-button-remaining'>
                        <span id="days">{days}</span> days / <span id="hours">{hours}</span> hours / <span id="minutes">{minutes}</span> minutes / <span id="seconds">{seconds}</span> seconds
                    </p>
                </button>

                </div>

            </div>

            
        </div>
        <Table />
    </div>
  )
}

export default EarnTemplate
