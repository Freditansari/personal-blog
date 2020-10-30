import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AboutmeCard from './components/aboutmecard/AboutmeCard'
import Layout from './components/Layout'
import Axios from 'axios'
import BlogList from './components/BlogList'

const index = props => {
  // console.log(props.posts)
  return (
    <div>
      <Layout >
        <div className ="container">
            <div className ="row">
              <div className ="col-sm-12 col-md-9 ">
                <BlogList blogData = {props.posts} />
              </div>

              <div className ="col-sm-12 col-md-3 ">
                  <AboutmeCard />
              </div>
              

            </div>

        </div>
         
        
      </Layout>
   
    </div>
  )
}

index.getInitialProps = async function() {
  // http://my-json-server.typicode.com/freditansari/blog_post_json/posts

  try {
    const res = await Axios('http://my-json-server.typicode.com/freditansari/blog_post_json/posts')
    return {
      posts : res.data
    }
    
  } catch (error) {
    return error;
  }
 
  // const data = await res.json();

}

export default index