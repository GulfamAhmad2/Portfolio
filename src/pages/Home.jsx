import React from 'react'
import { Link } from 'react-router-dom'
import Blob from '../assets/img/blob.png';
import About from './About';
import Tech from './Tech';
import Project from './Project';
import Contact from './Contact';
import Resume from '../assets/pdf/resume.pdf';


const Home = (props) => {
  const { dispatch, state, data } = props
  return (
    <main >
      <section className='home container'>
        <div className='home-left'>
          <h1>
            Hi,<br />I'am <span>Gulfam</span> <br />Frontend Developer
          </h1>
          <a href={Resume} className='button' download='Resume' >Resume</a>
          <div className='social-media'>
            <Link to='https://www.linkedin.com/in/gulfam-ahmad-86998124a/' target='_blank' >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.94 5C6.93974 5.53043 6.72877 6.03904 6.35351 6.41392C5.97825 6.78881 5.46944 6.99927 4.939 6.999C4.40857 6.99873 3.89997 6.78777 3.52508 6.41251C3.1502 6.03725 2.93974 5.52843 2.94 4.998C2.94027 4.46757 3.15124 3.95896 3.5265 3.58408C3.90176 3.20919 4.41057 2.99873 4.941 2.999C5.47144 2.99927 5.98004 3.21023 6.35492 3.58549C6.72981 3.96075 6.94027 4.46957 6.94 5ZM7 8.48H3V21H7V8.48ZM13.32 8.48H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.9 14.94 7.13 13.28 10.16L13.32 8.48Z" fill="black" />
              </svg>
            </Link>
            <Link to='https://github.com/GulfamAhmad2/' target='_blank'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.88399 18.653C5.58399 18.453 5.32599 18.197 5.02399 17.837C4.86724 17.6451 4.71191 17.4521 4.55799 17.258C4.09499 16.683 3.80299 16.417 3.50199 16.308C3.37534 16.2661 3.25836 16.1993 3.15794 16.1114C3.05751 16.0236 2.97567 15.9166 2.91723 15.7967C2.8588 15.6767 2.82495 15.5463 2.81768 15.4131C2.81041 15.2799 2.82987 15.1466 2.8749 15.021C2.91994 14.8955 2.98965 14.7802 3.07992 14.682C3.1702 14.5837 3.27921 14.5046 3.40055 14.4491C3.52188 14.3937 3.65309 14.3631 3.78643 14.3591C3.91978 14.3551 4.05257 14.3779 4.17699 14.426C4.92899 14.696 5.43799 15.161 6.12399 16.014C6.02999 15.897 6.46399 16.441 6.55699 16.553C6.74699 16.78 6.88699 16.918 6.99699 16.991C7.20099 17.128 7.58499 17.187 8.14699 17.131C8.17099 16.749 8.24099 16.378 8.34899 16.035C5.38099 15.31 3.70099 13.395 3.70099 9.639C3.70099 8.401 4.07099 7.284 4.75899 6.348C4.54099 5.454 4.57399 4.373 5.06099 3.156C5.11614 3.01815 5.20129 2.89431 5.31026 2.79347C5.41923 2.69262 5.54929 2.61731 5.69099 2.573C5.77199 2.549 5.81799 2.539 5.89899 2.526C6.70199 2.403 7.83599 2.696 9.31399 3.623C10.1948 3.41708 11.0964 3.31373 12.001 3.315C12.913 3.315 13.82 3.418 14.685 3.623C16.162 2.69 17.299 2.396 18.107 2.526C18.192 2.54 18.265 2.558 18.325 2.577C18.4638 2.62278 18.5909 2.69843 18.6974 2.79864C18.8038 2.89885 18.8869 3.02118 18.941 3.157C19.428 4.372 19.461 5.453 19.243 6.347C19.934 7.283 20.301 8.392 20.301 9.639C20.301 13.397 18.627 15.305 15.659 16.032C15.784 16.447 15.849 16.91 15.849 17.412C15.849 18.076 15.847 18.711 15.842 19.422C15.842 19.612 15.84 19.816 15.837 20.128C16.0611 20.1773 16.2613 20.3022 16.4043 20.4817C16.5472 20.6612 16.624 20.8844 16.6219 21.1138C16.6198 21.3432 16.5389 21.5649 16.3927 21.7418C16.2465 21.9186 16.0439 22.0398 15.819 22.085C14.679 22.313 13.835 21.553 13.835 20.561L13.837 20.114L13.842 19.409C13.847 18.702 13.85 18.071 13.85 17.412C13.85 16.715 13.666 16.26 13.424 16.051C12.763 15.481 13.098 14.397 13.965 14.3C16.931 13.966 18.301 12.817 18.301 9.64C18.301 8.685 17.989 7.895 17.388 7.235C17.2617 7.09623 17.177 6.92474 17.1436 6.74013C17.1102 6.55552 17.1294 6.36523 17.199 6.191C17.365 5.776 17.435 5.234 17.294 4.577L17.284 4.579C16.793 4.719 16.174 5.019 15.426 5.529C15.3054 5.61085 15.1683 5.66535 15.0244 5.68867C14.8805 5.71199 14.7333 5.70357 14.593 5.664C13.7489 5.42995 12.8769 5.3122 12.001 5.314C11.111 5.314 10.229 5.434 9.40899 5.664C9.26943 5.70325 9.123 5.71168 8.97986 5.68872C8.83671 5.66575 8.70027 5.61194 8.57999 5.531C7.82699 5.024 7.20599 4.724 6.70999 4.584C6.56699 5.237 6.63799 5.778 6.80299 6.191C6.8726 6.36523 6.89178 6.55552 6.85836 6.74013C6.82494 6.92474 6.74026 7.09623 6.61399 7.235C6.01699 7.891 5.70099 8.694 5.70099 9.639C5.70099 12.811 7.07199 13.969 10.023 14.299C10.888 14.397 11.225 15.477 10.568 16.048C10.375 16.215 10.138 16.78 10.138 17.412V20.561C10.138 21.547 9.30399 22.287 8.17799 22.09C7.94921 22.0504 7.74133 21.9325 7.58999 21.7564C7.43866 21.5804 7.35331 21.3571 7.34858 21.125C7.34385 20.8929 7.42003 20.6663 7.56407 20.4842C7.70811 20.3021 7.91102 20.1758 8.13799 20.127V19.137C7.22799 19.199 6.47699 19.05 5.88399 18.653Z" fill="black" />
              </svg>

            </Link>
            <Link to='https://www.instagram.com/gulfam.ahmad.566/' target='_blank' >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.001 9C11.2054 9 10.4423 9.31607 9.87969 9.87868C9.31708 10.4413 9.00101 11.2044 9.00101 12C9.00101 12.7956 9.31708 13.5587 9.87969 14.1213C10.4423 14.6839 11.2054 15 12.001 15C12.7967 15 13.5597 14.6839 14.1223 14.1213C14.6849 13.5587 15.001 12.7956 15.001 12C15.001 11.2044 14.6849 10.4413 14.1223 9.87868C13.5597 9.31607 12.7967 9 12.001 9ZM12.001 7C13.3271 7 14.5989 7.52678 15.5365 8.46447C16.4742 9.40215 17.001 10.6739 17.001 12C17.001 13.3261 16.4742 14.5979 15.5365 15.5355C14.5989 16.4732 13.3271 17 12.001 17C10.6749 17 9.40316 16.4732 8.46547 15.5355C7.52779 14.5979 7.00101 13.3261 7.00101 12C7.00101 10.6739 7.52779 9.40215 8.46547 8.46447C9.40316 7.52678 10.6749 7 12.001 7ZM18.501 6.75C18.501 7.08152 18.3693 7.39946 18.1349 7.63388C17.9005 7.8683 17.5825 8 17.251 8C16.9195 8 16.6015 7.8683 16.3671 7.63388C16.1327 7.39946 16.001 7.08152 16.001 6.75C16.001 6.41848 16.1327 6.10054 16.3671 5.86612C16.6015 5.6317 16.9195 5.5 17.251 5.5C17.5825 5.5 17.9005 5.6317 18.1349 5.86612C18.3693 6.10054 18.501 6.41848 18.501 6.75ZM12.001 4C9.52701 4 9.12301 4.007 7.97201 4.058C7.18801 4.095 6.66201 4.2 6.17401 4.39C5.76562 4.53994 5.39642 4.78026 5.09401 5.093C4.78101 5.3954 4.54036 5.76458 4.39001 6.173C4.20001 6.663 4.09501 7.188 4.05901 7.971C4.00701 9.075 4.00001 9.461 4.00001 12C4.00001 14.475 4.00701 14.878 4.05801 16.029C4.09501 16.812 4.20001 17.339 4.38901 17.826C4.55901 18.261 4.75901 18.574 5.09101 18.906C5.42801 19.242 5.74101 19.443 6.17101 19.609C6.66501 19.8 7.19101 19.906 7.97101 19.942C9.07501 19.994 9.46101 20 12 20C14.475 20 14.878 19.993 16.029 19.942C16.811 19.905 17.337 19.8 17.826 19.611C18.234 19.4603 18.6031 19.2201 18.906 18.908C19.243 18.572 19.444 18.259 19.61 17.828C19.8 17.336 19.906 16.81 19.942 16.028C19.994 14.925 20 14.538 20 12C20 9.526 19.993 9.122 19.942 7.971C19.905 7.189 19.799 6.661 19.61 6.173C19.4593 5.76502 19.2191 5.39598 18.907 5.093C18.6047 4.77985 18.2355 4.53917 17.827 4.389C17.337 4.199 16.811 4.094 16.029 4.058C14.926 4.006 14.541 4 12.001 4ZM12.001 2C14.718 2 15.057 2.01 16.124 2.06C17.188 2.11 17.914 2.277 18.551 2.525C19.211 2.779 19.767 3.123 20.323 3.678C20.8315 4.1779 21.225 4.78259 21.476 5.45C21.723 6.087 21.891 6.813 21.941 7.878C21.988 8.944 22.001 9.283 22.001 12C22.001 14.717 21.991 15.056 21.941 16.122C21.891 17.187 21.723 17.912 21.476 18.55C21.2257 19.2178 20.8321 19.8226 20.323 20.322C19.823 20.8303 19.2183 21.2238 18.551 21.475C17.914 21.722 17.188 21.89 16.124 21.94C15.057 21.987 14.718 22 12.001 22C9.28401 22 8.94501 21.99 7.87801 21.94C6.81401 21.89 6.08901 21.722 5.45101 21.475C4.78333 21.2245 4.17853 20.8309 3.67901 20.322C3.17044 19.8222 2.77697 19.2175 2.52601 18.55C2.27801 17.913 2.11101 17.187 2.06101 16.122C2.01301 15.056 2.00101 14.717 2.00101 12C2.00101 9.283 2.01101 8.944 2.06101 7.878C2.11101 6.812 2.27801 6.088 2.52601 5.45C2.77624 4.78218 3.16981 4.17732 3.67901 3.678C4.17868 3.16923 4.78344 2.77573 5.45101 2.525C6.08801 2.277 6.81301 2.11 7.87801 2.06C8.94501 2.013 9.28401 2 12.001 2Z" fill="black" />
              </svg>
            </Link>
          </div>
        </div>
        <div className='home-right'>
          <img src={Blob} loading='lazy' />
        </div>
      </section>
      <About/>
      <Tech/>
      <Project dispatch={dispatch} state={state} />
      <Contact dispatch={dispatch} state={state} />
    </main>
  )
}

export default Home