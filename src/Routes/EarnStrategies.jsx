import React from 'react'
import EarnTemplate from '../Components/EarnTemplate'

const EarnStrategies = () => {
    const pool= [
    {
        strategy:"Trading and arbitrage",
        risk: "Low",
        poolSize: "200,000.00 USDT",
        minEntry: "25.00 USDT",
        maxEntry: "200,000.00 USDT",
        token: "USDT"
    }]

  return (
    <div>
      <EarnTemplate strategy={pool[0].strategy} risk={pool[0].risk} pool={pool[0].poolSize} min={pool[0].minEntry} max={pool[0].maxEntry} token={pool[0].token}/>
    </div>
  )
}

export default EarnStrategies
