import React from 'react'
import { Nav, NavBtn, NavBtnLink, NavLink, NavMenu} from './NavbarElements'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const currentUser = useSelector(state => state.currentUser.user)
    return (
        <div>
           <Nav>
               <NavLink to ="/">
                   <h1>NAGP-BANK</h1>
               </NavLink>
               <NavMenu>
                   <NavLink to="./signup" activeStyle>
                        SignUp
                   </NavLink>
                   {/* <NavLink to="/login" activeStyle>
                        Login
                   </NavLink> */}
                   <NavLink to="/myprofile" activeStyle>
                        MyProfile
                   </NavLink>
               </NavMenu>
               <NavBtn>
                   <NavBtnLink to="/login" style={{marginLeft:'20px'}}>
                   {currentUser.username? "Logout" : "Login"}
                   </NavBtnLink>
               </NavBtn>
           </Nav>
        </div>
    )
}
 
export default Navbar
