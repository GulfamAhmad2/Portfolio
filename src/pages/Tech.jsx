import React from 'react'
import techImg from '../assets/img/tech.jpg';
import Html from '../assets/svg/html.svg';
import Css from '../assets/svg/css.svg';
import Js from '../assets/svg/js.svg';
import reactSvg from '../assets/svg/react.svg';
import Tailwind from '../assets/svg/tailwind.svg';

const Tech = () => {
  return (
    <section className='skill' id='skill'>
        <h3 className='heading'>Skills</h3>
        <div className='skill-container'>
          <div className='skill-left'>
            <h3>Professional Skills</h3>
            <dev className='pro-skill'>
              <div className='progress-tag' >
                <div className='skill-icon'>
                  <img src={Html} />
                  <label>80%</label>
                </div>
                <progress value="80" max="100" />
              </div>
              <div className='progress-tag' >
                <div className='skill-icon'>
                  <img src={Css} />
                  <label>75%</label>
                </div>
                <progress value="75" max="100" />
              </div>
              <div className='progress-tag' >
                <div className='skill-icon'>
                  <img src={Js} />
                  <label>65%</label>
                </div>
                <progress value="65" max="100" />
              </div>
              <div className='progress-tag' >
                <div className='skill-icon'>
                  <img src={reactSvg} />
                  <label>70%</label>
                </div>
                <progress value="70" max="100" />
              </div>
              <div className='progress-tag' >
                <div className='skill-icon'>
                  <img src={Tailwind} />
                  <label>50%</label>
                </div>
                <progress value="50" max="100" />
              </div>

            </dev>
          </div>
          <div className='skill-right'>
            <img src={techImg} loading='lazy' />
          </div>
        </div>
    </section>
  )
}

export default Tech