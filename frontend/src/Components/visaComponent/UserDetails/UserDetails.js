import React, { useEffect, useState } from 'react';
import axios from "axios";
import User from '../User/User';

const URL ="http://localhost:5000/Users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}

function UserDetails() {
 
  const [Users, setUsers] = useState();
  useEffect(()=> {
    fetchHandler().then((data) => setUsers(data.Users));
  },[])

  return (
    <div>
      <div>
        {Users && Users.map((user, i) => (
        <div key={i}>
          <User user={user}/>
        </div>
        ))}
      </div>
    </div>
  );
}

export default UserDetails;
