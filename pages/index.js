import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AboutmeCard from './components/aboutmecard/AboutmeCard'
import Layout from './components/Layout'

export default function Home() {
  return (
    <div>
      <Layout >
         <AboutmeCard />
      </Layout>
   
    </div>
  )
}
