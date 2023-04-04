import React, { useRef, useState } from 'react'
import Button from './Button'
import logoMin from "../Images/logo/logo-min.png"
import MenuMobile from './MenuMobile'



const Header = ({toggleModal}) => {

    

    function disableScroll() {
        document.body.classList.add("stop-scrolling");
      }
      
      function enableScroll() {
        document.body.classList.remove("stop-scrolling");
      }

      console.log()




    const [isOpen, setIsOpen] = useState(false);
    const [animation, setAnimation] = useState("")
    const menuRef = useRef("")
    const setMenu = () =>{
        if(!isOpen){
            setIsOpen(!isOpen)
            disableScroll()
            setAnimation("aparecer")
            menuRef.current.style.display="flex"
            
        }
        else{
            setIsOpen(!isOpen)
            enableScroll()
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

        <div className={`mobile-menu ${animation}`} ref={menuRef} >
            <MenuMobile closeMenu={setMenu} />
        </div>
       
        


    </div>
  )
}

export default Header
