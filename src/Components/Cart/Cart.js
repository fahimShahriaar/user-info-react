import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const selectedUsers = props.selectedUsers;
    console.log(selectedUsers);
    let totalIncome = 0;
    for (let i = 0; i < selectedUsers.length; i++) {
        const selectedUser = selectedUsers[i];
        totalIncome = totalIncome + selectedUser.yearlyIncome;
    }
    return (
        <div className="cart">
            <h2 className="headingStyle">User Info Summary</h2>
            <h4><span className="orangeColor">{selectedUsers.length}</span> new user added</h4>
            <h4>Annual Salary: {totalIncome}</h4>
        </div>
    );
};

export default Cart;