import React from "react";
import { useForm } from "react-hook-form";
import './transaction.css'
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function TransactionFn() {

    const currentUser = useSelector(state => state.currentUser)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        if (data.transaction_type === "Withdraw" && data.amount > currentUser.user.balance)
            alert("Withdraw Amount cannot be greater than current balance");
        else
        axios.post("http://localhost:3000/transactions", {

            transactionType: data.transaction_type,
            transactionAmount: parseInt(data.amount, 10),
            transactionDescription: data.desc,
            transactionDate: new Date().toLocaleString(),
            userId: currentUser.user.id

        })
            .then(function (response) {
                if (response.data) {
                    console.log(response.data)
                    alert("Transaction Executed!! Check Dashboard for updated balance.")
                }
                else
                    alert("Transaction Failed");
            })
            .catch(function (error) {
                // handle error
                alert("Server Issue - " + error);
            });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form-layout'>
            <h1 style={{ color: '#15cdfc', textShadow: '2px 2px' }}>Withdraw/Deposit</h1>
            <div className='form-label'>
                <label>Select Transaction Type </label>

                <input style={{ marginLeft: '100px' }} type="radio" id="withdraw" name="transaction_type" value="Withdraw" {...register("transaction_type", { required: true })} />
                <label for="withdraw">Withdraw</label><br></br>
                <input style={{ marginLeft: '270px' }} type="radio" id="deposit" name="transaction_type" value="Deposit" {...register("transaction_type", { required: true })} />
                <label for="deposit">Deposit</label><br></br>
                {errors.transaction_type && <div className='form-error'>Please select transaction type</div>}

                <div className='form-label' style={{ marginTop: '10px' }}>
                    <label style={{ margin: '15px' }}>Account Balance  </label>
                    <label style={{ marginLeft: '100px' }} id="balance">₹{currentUser.user.balance}</label>
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
                    {errors.amount && <div className='form-error'>Minimum ₹100 & Maximum ₹10000 amount can be added.</div>}
                </div>

                <div className='form-label'>
                    <input placeholder="Description" {...register("desc")} />
                </div>

                <div className='form-label'>
                    <input type="submit" />
                </div>

            </div>
        </form>
    );
}