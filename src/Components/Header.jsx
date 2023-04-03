import React, { useRef, useState } from 'react'
import Button from './Button'
import logoMin from "../Images/logo/logo-min.png"
import MenuMobile from './MenuMobile'

const Header = ({funct}) => {

    const [modal,setModal] = useState(false)

    const toggleModal = ()=>{
        setModal(!modal)
        console.log(modal)
    }


    const [isOpen, setIsOpen] = useState(false);
    const [animation, setAnimation] = useState("")
    const menuRef = useRef("")
    const setMenu = () =>{
        if(!isOpen){
            setIsOpen(!isOpen)
            setAnimation("aparecer")
            menuRef.current.style.display="flex"
        }
        else{
            setIsOpen(!isOpen)
            setAnimation("desaparecer")
            setTimeout(()=>{menuRef.current.style.display="none"},200)
        }
      }

  return (
    <div className='header'>
        <div className='header-left'>
            <div className={`hambur ${isOpen ? "active2" : ""}`} onClick={setMenu}>
                    <div className="hambur-1 menu-hambur"></div>
                    <div className="hambur-2 menu-hambur"></div>
                    <div className="hambur-3 menu-hambur"></div>
            </div>
        </div>

      <Button funct={toggleModal}/>

        <div className={`modal-header ${!modal ? "hidden" : "visible"}`} >
            <ul>
                <li>
                    <a href="">Metamask</a></li>
                <li>
                    <a href="">Trust Wallet</a>
                </li>
                <li>
                    <a href="">Wallet Connect</a>
                </li>
            </ul>
        </div>

        <div className={`mobile-menu ${animation}`} ref={menuRef} >
            <MenuMobile closeMenu={setMenu} />
        </div>
       
        


    </div>
  )
}

export default Header
