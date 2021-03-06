import React from "react";
import { useForm } from "react-hook-form";
import './Form.css'
import axios from 'axios'
import { useState } from "react";

export default function RegisterFormFN() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => axios.post("http://localhost:3000/users", data)
        .then(function (response) {
            if (response.data)
                alert("User has been registered!! Please login.")
        })
        .catch(function (error) {
            // handle error
            alert("Server Issue - " + error);
        });;

    const [districts, setDistrict] = useState([
        <option value="">Select District</option>,
        <option value="Gurgaon">Gurgaon</option>,
        <option value="Amritsar">Amritsar</option>,
        <option value="Jaipur">Jaipur</option>,
        <option value="Meerut">Meerut</option>,
        <option value="Gurgaon">Gurgaon</option>
    ]);

    function handleChange(event){
      
        console.log(event.target.value);
        switch (event.target.value) {
            case "Haryana": {
                setDistrict(<option value="Gurgaon">Gurgaon</option>)
                break;
            }
            case "Punjab": {
                setDistrict(<option value="Amritsar">Amritsar</option>)
                break;
            }
            case "Rajasthan": {
                setDistrict(<option value="Jaipur">Jaipur</option>)
                break;
            }
            case "Uttar-Pradesh": {
                setDistrict(<option value="Meerut">Meerut</option>)
                break;
            }
            default: {
                setDistrict(<option value="Gurgaon">Gurgaon</option>)
                break;
            }
        }
        event.preventDefault();
    };

    console.log(watch("example"));
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form-input'>
            <h1 style={{ color: '#15cdfc', textShadow: '2px 2px' }}>Bank Account Register</h1>
            <div className='form-label'>
                <input placeholder="Username" {...register("username", {
                    required: true, minLength: {
                        value: 4,
                        message: 'min required'
                    }, maxLength: {
                        value: 10,
                        message: 'max required'
                    }
                }
                )} />
                {errors.username && <div className='form-error'>Minimum 3 & Maximum 10 character allowed.</div>}
            </div>

            <div className='form-label'>
                <label>DOB : </label>
                <input type="date" {...register("dob", { required: true })} />
                {errors.dob && <div className='form-error'>Date is required</div>}
            </div>

            <div className='form-label'>
                <input type="number" placeholder="Account Number" {...register("accountNumber", {
                    required: true, minLength: {
                        value: 4,
                        message: 'min required'
                    }, maxLength: {
                        value: 10,
                        message: 'max required'
                    }
                })} />
                {errors.accountNumber && <div className='form-error'>Minimum 4 & Max 10 length allowed.</div>}
            </div>
            <div className='form-label'>
                <select {...register("accountType", { required: true })}>
                    <option value="">Select Account Type</option>
                    <option value="Saving Account">Saving Account</option>
                    <option value="Current Account">Current Account</option>
                </select>
                {errors.accountType && <div className='form-error'>Account-Type is required.</div>}
            </div>
            <div className='form-label'>
                <label>Select State : </label>
                <select onChange={handleChange} {...register("state", { required: true })}>
                    <option value="">Select State</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Uttar Pradesh">Uttar-Pradesh</option>
                </select>
                {errors.state && <div className='form-error'>State is required</div>}

            </div>
            <div className='form-label'>
                <label>Select City : </label>
                <select {...register("district", { required: true })}>
                    {/* <option value="">Select District</option>
                    <option value="Amritsar">Amritsar</option>
                    <option value="Gurgaon">Gurgaon</option>
                    <option value="Meerut">Meerut</option>
                    <option value="Jaipur">Jaipur</option> */}
                    {districts}
                </select>
                {errors.district && <div className='form-error'>District is required</div>}

            </div>
            <div className='form-label'>
                <input type="password" placeholder="Password" {...register("password", {
                    required: true, minLength: {
                        value: 4,
                        message: 'min required'
                    }, maxLength: {
                        value: 10,
                        message: 'max required'
                    }
                })} />
                {errors.password && <div className='form-error'>Minimum 4 & Max 10 length allowed.</div>}
            </div>
            <div className='form-label'>
                <input type="password" placeholder="Confirm Password" {...register("confirmPassword", {
                    required: true, minLength: {
                        value: 4,
                        message: 'min required'
                    }, maxLength: {
                        value: 10,
                        message: 'max required'
                    }
                })} />
                {errors.confirmPassword && <div className='form-error'>Minimum 4 & Max 10 length allowed.</div>}
            </div>
            <div className='form-label'>
                <input type="hidden" value="0" {...register("balance")} />
                {errors.balance && <div className='form-error'>Minimum 100 & Maximum 10000 amount can be added.</div>}
            </div>

            <div className='form-label'>
                <input type="submit" />
            </div>

        </form>
    );
}