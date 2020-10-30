import React from 'react'
import PropTypes from 'prop-types'
import upworkIcon from './upwork-icon.svg'
import udemyIcon from './udemy-icon.svg'
const AboutmeCard = props => {
    return (
        <div>


            <div class="card">
    
            <h1>Fredy Yudiawan</h1>
            
            <p class="title">Software Developer - @merdekacloud</p>
            <p>Hi, I'm Fredy and I have been a software developer since 2005. I have been involved in numerous enterprise application development in Indonesia. I can assist you and your company on software development, create and manage offshore development talents. I taught courses in Udemy about MERN stack, React Native, and Java Spring Boot in Indonesian.</p>
            <a href="https://twitter.com/merdekaCloud"><i class="fa fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/ftansari/"><i class="fa fa-linkedin"></i></a>
            <a href="https://www.upwork.com/freelancers/~0154ac6152389749a5"><img className="upwork-icon" src={upworkIcon}></img></a>
            {/* <a href="https://www.upwork.com/freelancers/~0154ac6152389749a5"><upworkIcon className="upwork-icon"/></a> */}
            <a href="https://www.udemy.com/user/fredi-tansari/"><img className="upwork-icon" src={udemyIcon}></img></a>
            <p><button>Contact</button></p>
            </div>
            <style jsx>{`
            .fa-twitter{
                color: white
            }
         
            .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            max-width: 300px;
            margin: auto;
            text-align: center;
            }

            .title {
            color: grey;
            font-size: 18px;
            }

            button {
            border: none;
            outline: 0;
            display: inline-block;
            padding: 8px;
            color: white;
            background-color: #000;
            text-align: center;
            cursor: pointer;
            width: 100%;
            font-size: 18px;
            }

            a {
            text-decoration: none;
            font-size: 22px;
            color: white;
            }

            .upwork-icon{
                width: 25px;
                height: 25px;
                filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(192deg) brightness(102%) contrast(103%);
            }

         
            button:hover, a:hover {
            opacity: 0.7;
            }
                `}

            </style>
       
        </div>
    )
}

AboutmeCard.propTypes = {

}

export default AboutmeCard
