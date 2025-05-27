import { useRef, useEffect, useState } from 'react'
import LanguageDropdown from '../LanguageDropdown'
import { IoMdClose } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import Rupees from '../Rupees'
const Header = () => {
  const [mobile, setMobile] = useState(false)
  const [menuSidebar, setMenuSidebar] = useState(false)
  const menuSidebarRef
    = useRef(null);
  useEffect(() => {
    if (window.innerWidth < 1006) {
      setMobile(true)
    }
  }, [])
  useEffect(() => {
    console.log("mobile")
    console.log(window.innerWidth)
    const handleresize = () => {
      if (window.innerWidth < 1006) {
        setMobile(true)
      }
      else {
        setMobile(false)

      }
    }
    window.addEventListener("resize", handleresize)
    return () => {
      window.removeEventListener("resize", handleresize)
    }
  }, [])
  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(menuSidebarRef
      )
      if (menuSidebarRef
        .current && !menuSidebarRef
          .current.contains(event.target)) {
        setMenuSidebar(false);
      }
    };

    if (menuSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuSidebar]);
  return (
    <>
      <nav className='nav_container'>
        <div className='leftnavDiv'>
          <div className='logo_container'>
            <img src="/images/logo.png" alt="logo" />
          </div>
          {!mobile &&
            (
              <ul className='navLIst'>
                <li ><img src='/images/home.png' alt='home' /></li>
                <li><img src='/images/Boxes.png' alt='boxes' /></li>
                <li><img src='/images/Battles.png' alt='battle' /></li>
                <li><img src='/images/vipmember.png' alt='vip' /></li>
                <li><img src='/images/affliates.png' alt='affliates' /></li>
              </ul>
            )
          }

        </div>

        <div className='right_section_nav'>
          <LanguageDropdown />
          <Rupees />
          <button className='authorizaionBtn'>Authorization</button>

          <img src="images/msg.png" alt="msg" />
          {mobile && (
            <div className="">
              {
                menuSidebar ? <IoMdClose color='white' size={25} onClick={() => setMenuSidebar(!menuSidebar)} /> : <BsThreeDotsVertical color='white' size={25} onClick={() => setMenuSidebar(!menuSidebar)} />
              }
            </div>

          )}
        </div>
      </nav>
      <div ref={menuSidebarRef} className={menuSidebar ? `sidebarDiv active` : `sidebarDiv`}>
        <ul className='sidebarnavLIst'>
          <li ><img src='/images/home.png' alt='home' /></li>
          <li><img src='/images/Boxes.png' alt='boxes' /></li>
          <li><img src='/images/Battles.png' alt='battle' /></li>
          <li><img src='/images/vipmember.png' alt='vip' /></li>
          <li><img src='/images/affliates.png' alt='affliates' /></li>
        </ul>
      </div>
    </>
  )
}

export default Header