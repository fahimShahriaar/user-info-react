import React, { useEffect, useState } from 'react';
import './Info.css';
import data from '../../data/data.json';
import User from '../User/User';
import Cart from '../Cart/Cart';

const Info = () => {
    const [users, setUsers] = useState(data);
    const [selectedUsers, setSelectedUsers] = useState([]);

    const handleAddUser = (user) => {
        // console.log('user added', user);
        setSelectedUsers([...selectedUsers, user]);
    }

    return (
        <div className="info-container">
            <div className="user-container">
                {
                    users.map(user => <User user={user} handleAddUser={handleAddUser} key={user.id}></User>)
                }
            </div>
            <div className="cart-container">
                <Cart selectedUsers={selectedUsers}></Cart>
            </div>
        </div>
    );
};

export default Info;