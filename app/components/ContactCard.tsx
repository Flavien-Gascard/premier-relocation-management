import React from 'react'
// import AddContact from './AddContact'
import styles from './ContactCard.module.css';

// Sample API fetch:
interface User {
  id: number;
  name: string;
  email: string;
}

const ContactCard = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: User[] = await res.json()

  return (
    <div>
      {/* <AddContact/> */}
      <h1>Your Contacts</h1>
      <table className='table table-border'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default ContactCard
