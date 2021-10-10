import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export default function DashboardFn() {
    const currentUser = useSelector(state => state.currentUser)
    let history = useHistory();
    const onSubmit = data => history.push("/myprofile");

    const handleWithdraw = data => history.push("/transaction");

    const [users, setUsers] = useState([
        {
            "transactionId": 1,
            "transactionType": "Withdrawal",
            "transactionAmount": 100,
            "transactionDescription": "test",
            "transactionDate": "12/02",
            "userId": 1
        },
        {
            "transactionId": 1,
            "transactionType": "Withdrawal",
            "transactionAmount": 100,
            "transactionDescription": "test",
            "transactionDate": "12/02",
            "userId": 1
        }
        // { id: 1, transactionType: 'Withdraw', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User' }
    ]);

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
                        <th>{currentUser.user.balance}</th>
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
                        {users && users.map(user =>
                            <tr key={user.transactionId}>
                                <td>{user.transactionType}</td>
                                <td>{user.transactionAmount}</td>
                                <td>{user.transactionDate}</td>
                                <td>{user.transactionDescription}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
