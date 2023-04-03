import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../Images/logo/logo-benft.png"
import logoMin from "../Images/logo/logo-min.png"
import { FaMoneyBillWaveAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { MdHowToVote, MdCollections } from 'react-icons/md';

const Menu = () => {
    
    
  return (
    <div className='menu'>
        <div className='logo'>
            <img className='logo-menu' src={logo} alt="" />
            
        </div>
        <div className='menu-nav'>
            <NavLink className='menu-nav-options' to="/"><HiHome size={"20px"}/> Dashboard</NavLink>
            <NavLink className='menu-nav-options' to="/vote"><MdHowToVote size={"20px"}/> Vote</NavLink>
            {/* <div>
                <p className='menu-nav-options'> <FaMoneyBillWaveAlt size={"20px"}/> Earn Strategies</p>
            </div>
            <ul className='hidden'>
                <li>Weekly
                    <ul className='hidden'>
                        <li>Weekly 4</li>
                        <li>Weekly 5</li>
                    </ul>
                </li>
                <li>Montly
                    <ul className='hidden'>
                        <li>Montly 1</li>
                    </ul>
                </li>
                <li>Private
                    <ul className='hidden'>
                        <li>GH Private</li>
                        <li>LV Private</li>
                        <li>Lbank Private</li>
                        <li>Chip Private</li>
                        <li>Dale Private</li>
                        <li>SIV Private</li>
                        <li>Team Alex</li>
                    </ul>
                </li>
                <li>Vispx
                    <ul className='hidden'>
                        <li>Vispx Core</li>
                        <li>Kickback Pool</li>
                        <li>BDE ventures</li>
                        <li>Crystal Tower</li>
                        <li>XBorg Holders</li>
                        <li>Xborg Holders 2</li>
                        <li>SCM</li>
                        <li>Friends with BeNFT</li>
                    </ul>
                </li>
            </ul> */}
            <NavLink className='menu-nav-options' to={`/earn-strategies`}><FaMoneyBillWaveAlt  size={"20px"}/> Earn Strategies</NavLink>
            <NavLink className='menu-nav-options' to="/collection"><MdCollections size={"20px"}/> Collection</NavLink>
        </div>
    </div>
  )
}

export default Menu
