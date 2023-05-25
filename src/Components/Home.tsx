import React from 'react'
import ContactApi from './ContactApi'
import Layout from './Layout'
import Form from './Form'

function Home() {
  return (
    <div className='card'>
      <Layout/>
      <ContactApi/>
      <Form/>
    </div>
  )
}

export default Home
