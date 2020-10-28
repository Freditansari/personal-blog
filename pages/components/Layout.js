import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Navbar from './Navbar'

const Layout = props => {
    return (
        <div>
                <Head>
                <title>Fredy Yudiawan</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                </Head>
                <Navbar />
                <div className="container">
                    {props.children}

                </div>

              
        </div>
    )
}

Layout.propTypes = {

}

export default Layout
