import React from 'react'
import { useParams } from 'react-router-dom'
import EarnTemplate from '../Components/EarnTemplate'
import NotFound from '../Components/NotFound'

const EarnDinamic = () => {

    const poolBackend= [
        {
            name:"weekly4",
            strategy:"Trading and arbitrage",
            risk: "Low",
            poolSize: "200000",
            minEntry: "25",
            maxEntry: "200000",
            progress: "145000",
            token: "USDT"
        }]

    const {name} = useParams()

    const pool = poolBackend.filter(pool=> pool.name == name)
    

  return (
    <div>
      {pool == "" ? <NotFound/> : <EarnTemplate strategy={pool[0].strategy} risk={pool[0].risk} pool={pool[0].poolSize} min={pool[0].minEntry} max={pool[0].maxEntry} progress={pool[0].progress} token={pool[0].token}/>}
      
    </div>
  )
}

export default EarnDinamic
