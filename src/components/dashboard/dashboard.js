import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import allActions from '../actions/allActions';

export default function DashboardFn() {
    const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch()
    const [transactions, setTransaction] = useState([
        {
            "transactionId": 0,
            "transactionType": "Empty",
            "transactionAmount": 0,
            "transactionDescription": "Empty",
            "transactionDate": "Empty",
            "userId": 0
        }
    ]);


    const [initialBalance, setUpdatedBalance] = useState(currentUser.user.balance);



    useEffect(() => {
        axios.get("http://localhost:3000/transactions?userId=" + currentUser.user.id)
            .then(function (response) {
                if (response.data[0]) {
                    console.log(response.data)
                    setTransaction(response.data)
                    var bal = 0
                    response.data.map(trn => bal = bal + (trn.transactionType === "Withdraw" ? -trn.transactionAmount : trn.transactionAmount))

                    setUpdatedBalance(s => {
                        currentUser.user.balance = bal;

                        dispatch(allActions.userActions.setUser(currentUser.user));
                        return bal;
                    })

                    //currentUser.user.balance = initialBalance;

                    //dispatch(allActions.userActions.setUser(currentUser.user));
                }
                else
                    alert("Invalid User");
            })
            .catch(function (error) {
                // handle error
                alert("Server Issue - " + error);
            });
    }, [])

    let history = useHistory();

    const onSubmit = data => history.push("/myprofile");

    const handleWithdraw = data => history.push("/transaction");


    return (
        <div>
            <h1 style={{ color: '#15cdfc', transactionAmount: '2px 2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {currentUser.user.username ? currentUser.user.username : "Login"}'s Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th><input type='submit' onClick={onSubmit} value='MyProfile' style={{ display: 'flex', marginLeft: '20px', alignItems: 'end', background: 'lightblue' }}></input></th>
                        <th><input type='submit' onClick={handleWithdraw} value='Withdraw/Deposit' style={{ display: 'flex', alignItems: 'end', marginLeft: '20px', background: 'lightblue' }}></input></th>
                    </tr>
                </thead>
            </table>
            <table style={{ margin: '20px' }}>
                <thead>
                    <tr>
                        <th>Current Balance: </th>
                        <th>₹{initialBalance}</th>
                    </tr>
                    <tr>
                        <th>Account Number: </th>
                        <th>{currentUser.user.accountNumber}</th>
                    </tr>
                </thead>
            </table>
            <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="p-3 text-center">My Transactions</h3>
            <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Transaction-Type</th>
                            <th>Transaction-Amount</th>
                            <th>Transaction-Date</th>
                            <th>Transaction-Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions && transactions.map(trn =>
                            <tr key={trn.transactionId}>
                                <td>{trn.transactionType}</td>
                                <td>₹{trn.transactionAmount}</td>
                                <td>{trn.transactionDate}</td>
                                <td>{trn.transactionDescription}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
