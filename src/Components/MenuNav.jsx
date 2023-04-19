import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoMin from "../assets/logo/logo-min.png"
import { FaMoneyBillWaveAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { MdHowToVote, MdCollections } from 'react-icons/md';
import {AiOutlineArrowDown} from "react-icons/ai";
import {IoIosArrowDown} from "react-icons/io";
import {BsArrowRightShort} from "react-icons/bs"

const MenuNav = ({removeAct, addAct, refActive}) => {

    const [isOpen,setIsOpen] = useState({
        earn: false,
        weekly: false,
        montly: false,
        private: false,
        vispx: false,
        claim: false
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
        }else if(id=="claim"){
            nEarn.claim = !nEarn.claim
        }
    }

  return (
    <div className='menu-nav'>
            <NavLink onClick={removeAct} className='menu-nav-options' to="/" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100"><HiHome size={"20px"} color="#9ed0ed"/> Dashboard</NavLink>
            <NavLink onClick={removeAct} className='menu-nav-options' to="/vote" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"><MdHowToVote size={"20px"} color="#9ed0ed"/> Vote</NavLink>
            
            <div>
                        <a ref={refActive} onClick={()=>toggleEarn("earn")} href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle menu-nav-dropdown" data-aos="fade-right" data-aos-delay="300">
                            <span className="ms-1 d-sm-inline"><FaMoneyBillWaveAlt className='me-1' size={"20px"} color="#9ed0ed"/> Earn Strategies <IoIosArrowDown className={`${!isOpen.earn ? "arrow-close" : "arrow-open"}`}/>
                            {/* <AiOutlineArrowDown className={`${isOpen.earn ? "arrow-close" : "arrow-open"}`}/> */}
                            </span></a>
                        <ul className="collapse nav flex-column ms-1 menu-list w-100 pruebita" id="submenu2" data-bs-parent="#menu">
                            <li className="w-100 menu-list-group">
                                <a onClick={()=>toggleEarn("claim")} href="#submenu3" data-bs-toggle="collapse" className="px-0"> Claim Only <IoIosArrowDown className={`${!isOpen.claim ? "arrow-close" : "arrow-open"}`}/></a>
                                <ul className="collapse nav flex-column ms-3 pb-2" id="submenu3" data-bs-parent="#menu">
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/weekly4"> Weekly 4</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/weekly5"> Weekly 5</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/xborg2"> XBorg Holders 2</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/xborgcommunity"> XBorg Community claim</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className='w-100 menu-list-group'>
                                 <NavLink onClick={addAct} to="/earn-strategies/earn-benftpass"> Earn BeNFT Pass</NavLink>
                            </li>
                            <li className="w-100 menu-list-group">
                                <a onClick={()=>toggleEarn("weekly")} href="#submenu4" data-bs-toggle="collapse" className="px-0"> Weekly <IoIosArrowDown className={`${!isOpen.weekly ? "arrow-close" : "arrow-open"}`}/></a>
                                <ul className="collapse nav flex-column ms-3 " id="submenu4" data-bs-parent="#menu">
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/weekly4"> Public Pool</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="w-100 menu-list-group">
                                <a onClick={()=>toggleEarn("montly")} href="#submenu5" data-bs-toggle="collapse" className="px-0"> Montly <IoIosArrowDown className={`${!isOpen.montly ? "arrow-close" : "arrow-open"}`}/></a>
                                <ul className="collapse nav flex-column ms-3" id="submenu5" data-bs-parent="#menu">
                                    <NavLink onClick={addAct} to="/earn-strategies/monthly1">Monthly 1</NavLink>
                                </ul>
                            </li>
                            <li className="w-100 menu-list-group">
                                <a onClick={()=>toggleEarn("private")} href="#submenu6" data-bs-toggle="collapse" className="px-0"> Private <IoIosArrowDown className={`${!isOpen.private ? "arrow-close" : "arrow-open"}`}/></a>
                                <ul className="collapse nav flex-column ms-3" id="submenu6" data-bs-parent="#menu">
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private1">GH Private</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private2">LV Private</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private4">Lbank Private</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private5">Chip Private</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private7">Dale Private</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private12">SIV Private</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private15">Team Alex</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private17">Piper M350x</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private22">Astrid</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="w-100 menu-list-group" >
                                <a onClick={()=>toggleEarn("vispx")} href="#submenu7" data-bs-toggle="collapse" className="px-0"> Vispx <IoIosArrowDown className={`${!isOpen.vispx ? "arrow-close" : "arrow-open"}`}/></a>
                                <ul className="collapse nav flex-column ms-3" id="submenu7" data-bs-parent="#menu">
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private6">Vispx Core</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private8">BDE ventures</NavLink>
                                    </li>
                                    
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/crystal-tower">Crystal Tower</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private10">XBorg Holders</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private11">SCM</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private14">Friends with BeNFT</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private16">VCX partner</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private23">XBorg Community</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private19">Neth</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private20">Degen Trading</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private21">Apes Together Strong</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={addAct} to="/earn-strategies/private24">1% pool partner</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
            </div>
            
            {/* <NavLink className='menu-nav-options' to={`/earn-strategies`}><FaMoneyBillWaveAlt  size={"20px"}/> Earn Strategies</NavLink> */}
            <NavLink onClick={removeAct} className='menu-nav-options' to="/collection" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400"><MdCollections size={"20px"} color="#9ed0ed"/> Collection</NavLink>
        </div>
  )
}

export default MenuNav
