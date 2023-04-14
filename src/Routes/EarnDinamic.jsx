import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EarnTemplate from '../Components/EarnTemplate'
import NotFound from '../Components/NotFound'
import { useSelector } from 'react-redux'
import Loading from '../Components/Loading'

const EarnDinamic = () => {

    const {data} = useSelector((state)=> state.contract)

    const dataContract = data

    const [dataPool, setDataPool] = useState("")
  
    // const poolBackend= [
    //     {
    //         name:"weekly4",
    //         strategy:"Trading and arbitrage",
    //         risk: "Low",
    //         poolSize: "200000",
    //         minEntry: "25",
    //         maxEntry: "200000",
    //         progress: "145000",
    //         token: "USDT"
    //     }]

    const {name} = useParams()
    
    useEffect(()=>{
      if(dataContract !== ""){
        const pool =  dataContract.filter(pool=> pool.name == name)
        setDataPool(pool)
        return
      }
    },[dataContract])

    useEffect(()=>{
      if(dataContract !== ""){
        const pool =  dataContract.filter(pool=> pool.name == name)
        setDataPool(pool)
        return
      }
    },[name])

  return (
    <>
      {dataContract == "" ? <Loading/> : 
      <div>
        {dataPool == "" ? <NotFound/> : <EarnTemplate namePool={dataPool[0].namePool} yieldField={dataPool[0].yieldField} strategy={dataPool[0].strategy} risk={dataPool[0].risk} pool={dataPool[0].poolSize} min={dataPool[0].minEntry} max={dataPool[0].maxEntry} progress={dataPool[0].progress} token={dataPool[0].token}/>}
      </div>
      }
    </>
  )
}

export default EarnDinamic
