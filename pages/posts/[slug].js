import {useRouter} from 'next/router';
import Layout from '../components/Layout';
import matter from 'gray-matter'
const Post =({content, data}) =>{
    const router = useRouter();
    const {slug} = router.query

    const frontmatter = data




    return (
    <Layout>
        <h1>{frontmatter.title}</h1>
        <small>{frontmatter.date}</small>
        <h3>{content}</h3>
           
    </Layout>

    
    )
}

Post.getInitialProps = async (context) =>{
    const { slug } = context.query

    // console.log(slug)
    // Import our .md file using the `slug` from the URL
    const content = await import(`./content/${slug}.md`)

    const data = matter(content.default)
  
    return { ...data }
}
export default Post