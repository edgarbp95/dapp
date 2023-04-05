import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from "../Images/logo/logo-benft.png"
import logoMin from "../Images/logo/logo-min.png"
import { FaMoneyBillWaveAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { MdHowToVote, MdCollections } from 'react-icons/md';
import {AiOutlineClose, AiOutlineArrowDown} from "react-icons/ai";
import { FaYoutube, FaTelegramPlane, FaTwitter, FaLinkedin, FaMediumM  } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import {IoIosArrowDown} from "react-icons/io";

const MenuMobile = ({closeMenu}) => {
    const [isOpen,setIsOpen] = useState({
        earn: false,
        weekly: false,
        montly: false,
        private: false,
        vispx: false
    })
    const refActive = useRef()
    const addActive = () =>{
        refActive.current.classList.add("active")
    }
    const removeActive = () =>{
        refActive.current.classList.remove("active")
    }

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
    <div className='menu-mobile'>
        <div className='logo'>
            <img className='logo-menu' src={logo} alt="" />
            <AiOutlineClose onClick={closeMenu} color='#2c98d4' size={"30px"}/>
        </div>
        <div className='menu-nav'>
            <NavLink onClick={closeMenu} className='menu-nav-options' to="/"><HiHome size={"20px"} color="#9ed0ed"/> Dashboard</NavLink>
            <NavLink onClick={closeMenu} className='menu-nav-options' to="/vote"><MdHowToVote size={"20px"} color="#9ed0ed"/> Vote</NavLink>
            
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
                                        <NavLink onClick={closeMenu} to="/earn-strategies/weekly4"> Weekly 4</NavLink>
                                    </li>
                                    <li className='w-100'>
                                        <NavLink onClick={closeMenu} to="/earn-strategies/weekly5"> Weekly 5</NavLink>
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

            {/* <NavLink onClick={closeMenu} className='menu-nav-options' to={`/earn-strategies`}><FaMoneyBillWaveAlt  size={"20px"}/> Earn Strategies</NavLink> */}
            <NavLink onClick={closeMenu} className='menu-nav-options' to="/collection"><MdCollections size={"20px"} color="#9ed0ed"/> Collection</NavLink>
        </div>

        <div className='comunity'>
            <ul className='comunity-grid'>
                <li><a onClick={closeMenu} href="https://www.youtube.com/watch?v=14TT8G_vL0U&ab_channel=BeNFTSolutionsOfficial" target="_blank"><FaYoutube size={"20px"}/></a></li>
                <li><a onClick={closeMenu} href="https://www.instagram.com/benft.solutions/" target="_blank"> <AiFillInstagram  size={"20px"}/></a></li>
                <li><a onClick={closeMenu} href="https://t.me/benftsolutions" target="_blank"> <FaTelegramPlane  size={"20px"}/></a></li>
                <li><a onClick={closeMenu} href="https://www.linkedin.com/company/benft/" target="_blank"> <FaLinkedin  size={"20px"} /></a></li>
                <li><a onClick={closeMenu} href="https://twitter.com/benft_solutions" target="_blank"> <FaTwitter size={"20px"}  /></a></li>
                <li><a onClick={closeMenu} href="https://medium.com/@benft.solutions" target="_blank"> <FaMediumM  size={"20px"} /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default MenuMobile
