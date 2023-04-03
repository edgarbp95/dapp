import React from 'react'

const Vote = () => {
    let weekly = 5;
    let votes = 251;

  return (
    <div >
      {/* <h1>Vote</h1> */}
        <div className='container-route votes'>
            <div className='votes-left'>
                <h3>Votes</h3>
                <p>{votes}</p>
            </div>
            <div className='votes-right'>
                <div className='votes-right-1'>
                    <h3>VOTING TO OPEN A NEW POOL : <span>WEEKLY #{weekly}</span></h3>
                    <p>$BeAI always listen the community asks therefore, we decided to open up a voting session to determine if Weekly #5 goes live.</p>
                </div>
                <div className='votes-right-2'>
                    <p>Your opinion matters, we want to continue providing you with the weekly service, it is for this reason that we open a vote to create the weekly 5 250,000.00 USDT.</p>
                    <p>500 Votes.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vote
