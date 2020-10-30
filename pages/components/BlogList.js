import React from 'react'
import PropTypes from 'prop-types'
// import timeAgo from 'timeago'

import TimeAgo from 'timeago-react'
import Truncate from 'react-truncate';

const BlogList = props => {
    // console.log(props)
    const blogData = props.blogData.sort((a, b) =>{
        return new Date(b.date) - new Date(a.date)
    })
    return (
        <div>
            <div class="list-group">
            {
        
           
                blogData.map( post =>{
                    return (
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{post.title}</h5>
                            <small><TimeAgo datetime = {post.date} /></small>
                            </div>
                            <p class="mb-1"><Truncate lines ={3} ellipsis ={<span>... <a href={post.slug}>Read more</a></span>}>{post.content}</Truncate></p>
                            <small>{post.author}</small>
                        </a>

                    )
                    })
           

               
                
              
            }
            
       
            </div>
            
        </div>
    )
}

BlogList.propTypes = {

}

export default BlogList
