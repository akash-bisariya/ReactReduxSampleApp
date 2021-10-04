import React from 'react'
import { Nav, NavBtn, NavBtnLink, NavLink, NavMenu} from './NavbarElements'

const Navbar = () => {
    return (
        <div>
           <Nav>
               <NavLink to ="/">
                   <h1>NAGP-BANK</h1>
               </NavLink>
               {/* <Bars/> */}
               <NavMenu>
                   <NavLink to="./signup" activeStyle>
                        SignUp
                   </NavLink>
                   <NavLink to="/login" activeStyle>
                        Login
                   </NavLink>
                   <NavLink to="/myaccount" activeStyle>
                        MyAccount
                   </NavLink>
               </NavMenu>
               <NavBtn>
                   <NavBtnLink to="/signIn" style={{marginLeft:'20px'}}>
                        SignIn
                   </NavBtnLink>
               </NavBtn>
           </Nav>
        </div>
    )
}
 
export default Navbar
