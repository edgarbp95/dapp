import React, { useState } from 'react'
import metamaskLogo from "../Images/icons/metamask.png.png"
import walletConnect from "../Images/icons/wallet-connect.png"
import trustWallet from "../Images/icons/trust-wallet.png"
import {AiOutlineClose} from "react-icons/ai";
import walletImg from "../Images/icons/wallet.png";

const ConnectWallet = ({toggleModal, modal}) => {

  
  return (
    <div className={`modal-header ${!modal ? "hidden" : "visible"}`} >  

        <div className='container-modal'>
            <div className='modal-info'>
                <img className='wallet-img' src={walletImg} alt="" />
                <div className='modal-info-txt'>
                    <h2>Connect Wallet</h2>
                    <p>Start by connecting with one of the wallets below. Be sure to store your private keys or seed phrase securely. Never share them with anyone.</p>
                </div>
                
            </div>
        
            <AiOutlineClose className='close-icon' onClick={toggleModal} size={"25px"} color={"#121312"}/>
                    
            <div className='modal-wallets'>
                <ul>
                    <li>
                        <a href=""><img className='icon-wallets metamask' src={metamaskLogo} alt="logo metamask" /> Metamask</a></li>
                    <li>
                        <a href=""><img className='icon-wallets trust-wallet' src={trustWallet} alt="logo trust wallet" /> Trust Wallet</a>
                    </li>
                    <li>
                        <a href=""><img className='icon-wallets wallet-connect' src={walletConnect} alt="logo wallet connect" /> Wallet Connect</a>
                    </li>
                </ul>
            </div>
        </div>

        
    </div>
  )
}

export default ConnectWallet
