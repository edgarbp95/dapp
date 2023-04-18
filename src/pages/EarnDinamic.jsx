import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EarnTemplate from '../Components/EarnTemplate'
import NotFound from '../Components/NotFound'
import { useSelector } from 'react-redux'
import Loading from '../Components/Loading'

const EarnDinamic = () => {

    const {data} = useSelector((state)=> state.contract)

    const dataContract = data

    // const [dataPool, setDataPool] = useState("")
  
    const poolBackend= [
        {
            namePool: "BeNFT Weekly Earn 4",
            yieldField: "18%",
            name:"weekly4",
            strategy:"Trading and arbitrage",
            risk: "Low",
            poolSize: "200000",
            minEntry: "25",
            maxEntry: "200000",
            progress: "145000",
            token: "USDT"
        },
        {
          namePool: "BeNFT Weekly Earn 5",
          yieldField: "27%",
          name:"weekly5",
          strategy:"Trading and arbitrage",
          risk: "Low",
          poolSize: "250000",
          minEntry: "25",
          maxEntry: "200000",
          progress: "145000",
          token: "USDT"
      },
      {
          namePool: "BeNFT Montly 1",
          yieldField: "50%",
          name:"monthly1",
          strategy:"Trading and arbitrage",
          risk: "Low",
          poolSize: "200000",
          minEntry: "25",
          maxEntry: "200000",
          progress: "145000",
          token: "USDT"
      }
      ]

    const {name} = useParams()
    
    // useEffect(()=>{
    //   if(dataContract !== ""){
    //     const pool =  dataContract.filter(pool=> pool.name == name)
    //     setDataPool(pool)
    //     return
    //   }
    // },[dataContract])

    // useEffect(()=>{
    //   if(dataContract !== ""){
    //     const pool =  dataContract.filter(pool=> pool.name == name)
    //     setDataPool(pool)
    //     return
    //   }
    // },[name])

    const pool =  poolBackend.filter(pool=> pool.name == name)

  return (
    <>
      {/* {dataContract == "" ? <Loading/> :  */}
      <div>
        {pool == "" ? <NotFound/> : <EarnTemplate namePool={pool[0].namePool} yieldField={pool[0].yieldField} strategy={pool[0].strategy} risk={pool[0].risk} pool={pool[0].poolSize} min={pool[0].minEntry} max={pool[0].maxEntry} progress={pool[0].progress} token={pool[0].token}/>}
      </div>
      {/* } */}
    </>
  )
}

export default EarnDinamic
