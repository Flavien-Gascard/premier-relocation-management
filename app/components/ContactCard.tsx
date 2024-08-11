import React from 'react'
// import AddContact from './AddContact'

interface User {
  id: number;
  name:string;
}

const ContactCard = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: User[] = await res.json()

  return (
    <div>
      {/* <AddContact/> */}
      <h1>Contacts</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default ContactCard
