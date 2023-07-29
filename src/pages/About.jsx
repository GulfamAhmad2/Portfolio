import React from 'react'
import Profile from '../assets/img/profile.png';


const About = () => {
  return (
    <>
    <section id='about' >
        <div className='about' id='about'>
          <h2 className='heading' >About</h2>
          <div className='about-container'>
            <div className='about-left'>
              <div className='about-left-img'>
                <img src={Profile} loading='lazy' />
              </div>
            </div>
            <div className='about-right'>
              <h3>I'am Gulfam</h3>
              <p>
                Hi I'm frontend developer, I'm studying SY(BSC)IT at mumbai university. Currently I'm working as a desktop support engineer.
                I have good knowledge of <mark >Html, Css, SASS, Js, React, Redux, GitHub, Jest, and TailWind Css</mark> . I'm passionate about web development. I have strong problem solving skills. I am quick learner and have the ability to work independently as well as in team.
              </p>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default About