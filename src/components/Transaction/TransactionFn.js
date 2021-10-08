import './Form.css'
import React from "react";
import { useForm } from "react-hook-form";

export default function TransactionFn() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form-input'>
            <h1 style={{color:'#15cdfc', textShadow:'2px 2px'}}>Withdraw/Deposit</h1>
            <div className='form-label'>
                <label>Select Transaction Type - </label>

                <input style={{ marginLeft:'100px'}} type="radio" id="withdraw" name="transaction_type" value="Withdraw" {...register("transaction_type", { required: true })} />
                <label for="withdraw">Withdraw</label><br></br>
                <input style={{ marginLeft:'270px'}} type="radio" id="deposit" name="transaction_type" value="Deposit" {...register("transaction_type", { required: true })} />
                <label for="deposit">Deposit</label><br></br>
                {errors.transaction_type && <div className='form-error'>Please select transaction type</div>}

                <div className='form-label' style={{marginTop:'20px'}}>
                    <label style={{ margin:'15px' }}>Account Balance  </label>
                    <label style={{ marginLeft:'100px' }} id="balance">0</label>
                </div>

                <div className='form-label'>
                    <input placeholder="Amount in Rupees" {...register("amount", {
                        required: true, min: {
                            value: 100,
                            message: 'min required'
                        }, max: {
                            value: 10000,
                            message: 'max required'
                        }
                    }
                    )} />
                    {errors.amount && <div className='form-error'>Minimum 100 & Maximum 10000 amount can be added.</div>}
                </div>

                <div className='form-label'>
                    <input type="submit" />
                </div>

            </div>
        </form>
    );
}