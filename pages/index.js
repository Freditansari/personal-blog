import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AboutmeCard from './components/aboutmecard/AboutmeCard'
import Layout from './components/Layout'
import Axios from 'axios'

const index = props => {
  console.log(props.posts)
  return (
    <div>
      <Layout >
         <AboutmeCard />
      </Layout>
   
    </div>
  )
}

index.getInitialProps = async function() {
  // http://my-json-server.typicode.com/freditansari/blog_post_json/posts
  const res = await Axios('http://my-json-server.typicode.com/freditansari/blog_post_json/posts')
  // const data = await res.json();
  return {
    posts : res.data
  }
}

export default index