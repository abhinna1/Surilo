import 'bootstrap/dist/css/bootstrap.min.css';
import UserRow from './UserRow'

import axios from 'axios';
import { useState, useEffect } from 'react';

function UserData(){
    const [userData, setUserData] = useState([]);

    useEffect(()=>{
        async function getDatas(){
            let fetchedData = await axios.get(`/getUserData`)
            setUserData(fetchedData.data)
        }
        getDatas();
    }, [])

    const getUserData = ()=>{
        let data = []
        userData.map((i)=>data.push(<UserRow info = {i}></UserRow>))
        return data;
    }

    return (
    <div className='Panel'>
        
        <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">UID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Username</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {getUserData()}

        </tbody>
      </table>
    </div>
    )
}

export default UserData