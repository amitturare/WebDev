
import { useEffect, useState } from 'react'

import UserList from './components/UserList/UserList'

import userService from './services/user.service'

import './App.css'

function App() {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const data = await userService.getUsers();
    setUsers(data);
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <UserList users={users} />
    </>
  )
}

export default App
