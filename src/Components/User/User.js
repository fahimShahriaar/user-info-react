import React from 'react';
import './User.css'
const User = (props) => {
    const { name, email, gender, image, yearlyIncome } = props.user;
    // console.log(user);
    return (
        <div>
            <div className="user">
                <h1>{name}</h1>
                <img className="proPic" src={image} alt="" />
                <p>email: {email}</p>
                <p>gender: {gender}</p>
                <p>Yearly Income: {yearlyIncome}</p>
                <button onClick={() => props.handleAddUser(props.user)}>Add User</button>
            </div>
        </div>
    );
};

export default User;