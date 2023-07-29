import React from 'react'
import { Action } from '../App'
// import key from '../../emailKey/key';

import emailjs from 'emailjs-com';

const Contact = (props) => {

  const formSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_6zz14xp", "template_tb6nv0r", "#form", "TCtPn4FDCfmu6FgF5")
      .then(() => {
          props.dispatch({ type: Action.showText })
            setTimeout(()=>{
              props.dispatch({ type: Action.removeText })
            },5000)
        
      }, () => {
        alert("OOPS! maybe network issue...")
      });

  }

  return (
    <footer className='footer' id='contact'>
      <h3 className='headings' >Contact Me</h3>
      <div className='contact-form'>
        <form onSubmit={formSubmit} id='form' >
          <input name='user_name' required pattern='[A-Za-z]{3,30}' type='text' className='input-field' placeholder='Name' onChange={(e) => props.dispatch({ type: Action.name, payload: e.target.value })} onBlur={() => props.dispatch({ type: Action.blur })} focused={props.state.blur.toString()} />
          <input name='user_email' required type='email' className='input-field' placeholder='Email' onChange={(e) => props.dispatch({ type: Action.email, payload: e.target.value })} />
          <textarea required name='user_message' placeholder='Write your message' onChange={(e) => props.dispatch({ type: Action.message, payload: e.target.value })} />
          <span className='form-span' style={{ color: 'crimson', marginTop: '-10px', }}>Please Write somethings</span>
          {
           props.state.showText === true ? <span style={{ color: 'green', marginTop: '-10px' }}>Message sent ✅</span> : <></>
          }

          <div className='sub-btn'>
            <button disabled={props.state.showText === true} 
             style={{display:props.state.showText === true ? 'none' : ''}} >Submit</button>
             {
              props.state.showText === true ? <div class="lds-dual-ring" style={{display:props.state.showText === true ? 'block' : ''}} ></div> : <></>
             }
             
          </div>

        </form>
        <div className='contact-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120562.19529678913!2d72.91905903662901!3d19.214035642664037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8fcfe76fd59%3A0xcf367d85f7c50283!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690300844372!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <label>Copyright © 2023 Gulfam Ahmad</label>
    </footer>
  )
}

export default Contact