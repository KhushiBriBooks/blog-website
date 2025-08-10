import Head from 'next/head'
import React from 'react'
import BlogNavbar from './Navbar'
import Footer from './Footer'

const Layout = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>
            <BlogNavbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout