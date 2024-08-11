import Link from 'next/link'
import React from 'react'
import ContactCard from '../components/ContactCard'

const ContactUs = () => {
    return (
        <div>
            <h2>Contact information</h2>
            <p>Founder & CEO: Jessica Gascard</p>
            <p>Email: premrelocmanage @gmail.com</p>
            <p>Cell: (828) 707-4775</p>
            <p>Website: premier-relocation-management.com</p>
            <Link href='/'>Home</Link>

            <h1>List Of Available Contacts:</h1>
            <ContactCard />

        </div>
    )
}

export default ContactUs
