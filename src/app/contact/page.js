import ContactClient from '@/components/Contact/ContactPage'
import Layout from '@/components/layout/Layout'
import React from 'react'

export const metadata = {
  title: "Contact",
  description: "Contact us with the given information"
}

const Contact = () => {
  return (
    <Layout title={metadata.title} description={metadata.description}>
      <ContactClient/>
    </Layout>
  )
}

export default Contact