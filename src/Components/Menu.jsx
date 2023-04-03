import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../Images/logo/logo-benft.png"
import logoMin from "../Images/logo/logo-min.png"
import { FaMoneyBillWaveAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { MdHowToVote, MdCollections } from 'react-icons/md';
import {AiOutlineArrowDown} from "react-icons/ai";


const Menu = () => {
    const [menu, setMenu] = useState(true)
    const [weekly, setWeekly] = useState(true)
    const [montly, setMontly] = useState(true)
    const [privates, setPrivates] = useState(false)
    const [vispx, setVispx] = useState(false)
    
  return (
    <div className='menu'>
        <div className='logo'>
            <img className='logo-menu' src={logo} alt="" />
            
        </div>
        <div className='menu-nav'>
            <NavLink className='menu-nav-options' to="/"><HiHome size={"20px"}/> Dashboard</NavLink>
            <NavLink className='menu-nav-options' to="/vote"><MdHowToVote size={"20px"}/> Vote</NavLink>
            
            <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline"><FaMoneyBillWaveAlt size={"20px"}/> Earn Strategies <AiOutlineArrowDown/></span></a>
                        <ul class="collapse nav flex-column ms-1 menu-list w-100" id="submenu2" data-bs-parent="#menu">
                            <li class="w-100 menu-list-group">
                                <a href="#submenu3" data-bs-toggle="collapse" class="px-0"> Weekly <AiOutlineArrowDown/></a>
                                <ul class="collapse nav flex-column ms-3 pb-2" id="submenu3" data-bs-parent="#menu">
                                    <li className='w-100'><Link to="/earn-strategies/weekly4"> Weekly 4</Link></li>
                                    <li className='w-100'>Weekly 5</li>
                                </ul>
                            </li>
                            <li class="w-100 menu-list-group">
                                <a href="#submenu4" data-bs-toggle="collapse" class="px-0"> Montly <AiOutlineArrowDown/></a>
                                <ul class="collapse nav flex-column ms-3" id="submenu4" data-bs-parent="#menu">
                                    <li className='w-100'>Montly 1</li>
                                </ul>
                            </li>
                            <li class="w-100 menu-list-group">
                                <a href="#submenu5" data-bs-toggle="collapse" class="px-0"> Private <AiOutlineArrowDown/></a>
                                <ul class="collapse nav flex-column ms-3" id="submenu5" data-bs-parent="#menu">
                                    <li className='w-100'>GH Private</li>
                                    <li className='w-100'>LV Private</li>
                                    <li className='w-100'>Lbank Private</li>
                                    <li className='w-100'>Chip Private</li>
                                    <li className='w-100'>Dale Private</li>
                                    <li className='w-100'>SIV Private</li>
                                    <li className='w-100'>Team Alex</li>
                                </ul>
                            </li>
                            <li class="w-100 menu-list-group" >
                                <a href="#submenu6" data-bs-toggle="collapse" class="px-0"> Vispx <AiOutlineArrowDown/></a>
                                <ul class="collapse nav flex-column ms-3" id="submenu6" data-bs-parent="#menu">
                                    <li className='w-100'>Vispx Core</li>
                                    <li className='w-100'>Kickback Pool</li>
                                    <li className='w-100'>BDE ventures</li>
                                    <li className='w-100'>Crystal Tower</li>
                                    <li className='w-100'>XBorg Holders</li>
                                    <li className='w-100'>Xborg Holders 2</li>
                                    <li className='w-100'>SCM</li>
                                    <li className='w-100'>Friends with BeNFT</li>
                                </ul>
                            </li>
                        </ul>
            </li>
            
            {/* <NavLink className='menu-nav-options' to={`/earn-strategies`}><FaMoneyBillWaveAlt  size={"20px"}/> Earn Strategies</NavLink> */}
            <NavLink className='menu-nav-options' to="/collection"><MdCollections size={"20px"}/> Collection</NavLink>
        </div>
    </div>
  )
}

export default Menu
