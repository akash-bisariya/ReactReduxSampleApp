import './myprofile.css'
import { useSelector } from 'react-redux';

export default function MyProfileFn(){

    const currentUser = useSelector(state => state.currentUser.user)
    console.log(currentUser)

    return(
        <div className='form-input'>
            <h1 style={{color:'#15cdfc', textShadow:'2px 2px'}}>My Profile</h1>
            <div className='form-label'>
            <span>
                <label className='myprofile-label' > Name : </label>
                <label id="name" style={{marginLeft:'40px'}}>{currentUser.username}</label>
            </span>
            </div>
            <div className='form-label'>
            <span >
                <label  className='myprofile-label'>Account Number : </label>
                <label style={{marginLeft:'40px'}} id="accountNumber">{currentUser.accountNumber}</label>
            </span>
            </div>
            <div className='form-label'>
            <span >
                <label  className='myprofile-label'>Date Of Birth : </label>
                <label style={{marginLeft:'40px'}} id="dob">{currentUser.dob}</label>
            </span>
            </div>
            <div className='form-label'>
            <span >
                <label  className='myprofile-label'>State : </label>
                <label style={{marginLeft:'40px'}} id="state">{currentUser.state}</label>
            </span>
            </div>
            <div className='form-label'>
            <span >
                <label  className='myprofile-label'>City : </label>
                <label style={{marginLeft:'40px'}} id="city">{currentUser.district}</label>
            </span>
            </div>
            <div className='form-label'>
            <span >
                <label  className='myprofile-label'>Gender : </label>
                <label style={{marginLeft:'40px'}} id="gender">Number Value</label>
            </span>
            </div>
            <div className='form-label'>
            <span >
                <label  className='myprofile-label'>Account Type : </label>
                <label style={{marginLeft:'40px'}} id="accountType">{currentUser.accountType}</label>
            </span>
            </div>
        </div>
    );
}