import React, { useEffect, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import UserCard from './Components/UserCard';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("NetWork Is Has Error");
        }
        const data = await res.json();
        setUsers(data);
        toast.success("Data Fetched");
      } catch (error) {
        toast.error(error.message);
      }
    }
    getData();
  }, []);

  return (
    
    <div>
    
      {/* <ToastContainer/> */}
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
``