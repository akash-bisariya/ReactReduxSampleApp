import './myprofile.css'

export default function MyProfileFn(){
    return(
        <div className='form-input'>
            <h1 style={{color:'#15cdfc', textShadow:'2px 2px'}}>My Profile</h1>
            <div className='form-label'>
            <span>
                <label className='myprofile-label' > Name : </label>
                <label id="name" style={{marginLeft:'40px'}}>Name Value</label>
            </span>
            </div>
            <div className='form-label'>
            <span >
                <label  className='myprofile-label'>Account Number : </label>
                <label style={{marginLeft:'40px'}} id="accountNumber">Number Value</label>
            </span>
            </div>
            <div className='form-label'>
            <span >
                <label  className='myprofile-label'>Date Of Birth : </label>
                <label style={{marginLeft:'40px'}} id="dob">Number Value</label>
            </span>
            </div>
            <div className='form-label'>
            <span >
                <label  className='myprofile-label'>State : </label>
                <label style={{marginLeft:'40px'}} id="state">Number Value</label>
            </span>
            </div>
            <div className='form-label'>
            <span >
                <label  className='myprofile-label'>City : </label>
                <label style={{marginLeft:'40px'}} id="city">Number Value</label>
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
                <label style={{marginLeft:'40px'}} id="accountType">Number Value</label>
            </span>
            </div>
        </div>
    );
}