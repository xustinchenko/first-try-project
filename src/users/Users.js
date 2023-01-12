import UserTable from './UserTable';
import NewUserModal from './modals/NewUserModal';
import React, { useState } from "react";

function Users(props) {
    const [users, setUsers] = useState([
        { id: 1, name: 'First', surname: 'Last' },
        { id: 2, name: 'Sec', surname: 'Past' },
        { id: 3, name: 'Tret', surname: 'Bast' },
        { id: 4, name: 'Stvrty', surname: 'Hast' }
    ]);


    const addUser = (name, surname) => {
        var newId = 1;
        if (users.length > 0) {
            newId = users[users.length - 1].id + 1;
        }
        setUsers([...users, { id: newId, name: name, surname: surname }])
    } 
  
    return (
        <div>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-header">
                        Users
                    </div>
                    <div className="card-body">
                        <UserTable users={users} />
                        <NewUserModal addUser={addUser}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users