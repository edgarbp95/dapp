import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoMin from "../Images/logo/logo-min.png"
import { FaMoneyBillWaveAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { MdHowToVote, MdCollections } from 'react-icons/md';
import {AiOutlineArrowDown} from "react-icons/ai";
import {IoIosArrowDown} from "react-icons/io";

const MenuNav = ({removeAct, addAct, refActive}) => {

    const [isOpen,setIsOpen] = useState({
        earn: false,
        weekly: false,
        montly: false,
        private: false,
        vispx: false
    })

    const toggleEarn = (id)=>{
        const nEarn = {...isOpen}

        if(id=="earn"){
            nEarn.earn = !nEarn.earn
            setIsOpen(nEarn)
        }else if(id=="weekly"){
            nEarn.weekly = !nEarn.weekly
            setIsOpen(nEarn)
        }else if(id=="montly"){
            nEarn.montly = !nEarn.montly
            setIsOpen(nEarn)
        }else if(id=="private"){
            nEarn.private = !nEarn.private
            setIsOpen(nEarn)
        }else if(id=="vispx"){
            nEarn.vispx = !nEarn.vispx
            setIsOpen(nEarn)
        }
    }

  return (
    <div className='menu-nav'>
            <NavLink onClick={removeAct} className='menu-nav-options' to="/"><HiHome size={"20px"} color="#9ed0ed"/> Dashboard</NavLink>
            <NavLink onClick={removeAct} className='menu-nav-options' to="/vote"><MdHowToVote size={"20px"} color="#9ed0ed"/> Vote</NavLink>
            
            <div>
                        <a ref={refActive} onClick={()=>toggleEarn("earn")} href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle menu-nav-dropdown">
                            <span className="ms-1 d-sm-inline"><FaMoneyBillWaveAlt className='me-1' size={"20px"} color="#9ed0ed"/> Earn Strategies <IoIosArrowDown className={`${!isOpen.earn ? "arrow-close" : "arrow-open"}`}/>
                            {/* <AiOutlineArrowDown className={`${isOpen.earn ? "arrow-close" : "arrow-open"}`}/> */}
                            </span></a>
                        <ul className="collapse nav flex-column ms-1 menu-list w-100 pruebita" id="submenu2" data-bs-parent="#menu">
                            <li className="w-100 menu-list-group">
                                <a onClick={()=>toggleEarn("weekly")} href="#submenu3" data-bs-toggle="collapse" className="px-0"> Weekly <IoIosArrowDown className={`${!isOpen.weekly ? "arrow-close" : "arrow-open"}`}/></a>
                                <ul className="collapse nav flex-column ms-3 pb-2" id="submenu3" data-bs-parent="#menu">
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/weekly4"> Weekly 4</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/weekly5"> Weekly 5</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="w-100 menu-list-group">
                                <a onClick={()=>toggleEarn("montly")} href="#submenu4" data-bs-toggle="collapse" className="px-0"> Montly <IoIosArrowDown className={`${!isOpen.montly ? "arrow-close" : "arrow-open"}`}/></a>
                                <ul className="collapse nav flex-column ms-3" id="submenu4" data-bs-parent="#menu">
                                    <li className='w-100'>Montly 1</li>
                                </ul>
                            </li>
                            <li className="w-100 menu-list-group">
                                <a onClick={()=>toggleEarn("private")} href="#submenu5" data-bs-toggle="collapse" className="px-0"> Private <IoIosArrowDown className={`${!isOpen.private ? "arrow-close" : "arrow-open"}`}/></a>
                                <ul className="collapse nav flex-column ms-3" id="submenu5" data-bs-parent="#menu">
                                    <li className='w-100'>GH Private</li>
                                    <li className='w-100'>LV Private</li>
                                    <li className='w-100'>Lbank Private</li>
                                    <li className='w-100'>Chip Private</li>
                                    <li className='w-100'>Dale Private</li>
                                    <li className='w-100'>SIV Private</li>
                                    <li className='w-100'>Team Alex</li>
                                </ul>
                            </li>
                            <li className="w-100 menu-list-group" >
                                <a onClick={()=>toggleEarn("vispx")} href="#submenu6" data-bs-toggle="collapse" className="px-0"> Vispx <IoIosArrowDown className={`${!isOpen.vispx ? "arrow-close" : "arrow-open"}`}/></a>
                                <ul className="collapse nav flex-column ms-3" id="submenu6" data-bs-parent="#menu">
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
            </div>
            
            {/* <NavLink className='menu-nav-options' to={`/earn-strategies`}><FaMoneyBillWaveAlt  size={"20px"}/> Earn Strategies</NavLink> */}
            <NavLink onClick={removeAct} className='menu-nav-options' to="/collection"><MdCollections size={"20px"} color="#9ed0ed"/> Collection</NavLink>
        </div>
  )
}

export default MenuNav
