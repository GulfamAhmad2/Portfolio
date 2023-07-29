import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useReducer } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Skill from './pages/Tech'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Navbar from './Components/Navbar'


const initial = {
  hamburger: false,
  times: false,
  more: false,
  name: '',
  email: '',
  message: '',
  blur: false,
  showText: false,
  errorText: false,
  removeText: false,
}


export const Action = {
  hamburger: 'hamburger',
  times: 'times',
  more: 'more',
  name: 'name',
  email: 'email',
  message: 'message',
  blur: 'blur',
  showText: 'show',
  removeText: 'remove',
  errorText: 'error',


}

const reducer = (state, action) => {
  switch (action.type) {
/* ============== hamburger ============== */

    case Action.hamburger:
      return {
        ...state,
        hamburger: true
      }
/* ============== times ============== */

    case Action.times:
      return {
        ...state,
        hamburger: false,
      }

/* ============== more project ============== */

    case Action.more:
      if (!state.more) {
        return {
          ...state,
          more: true,
        }
      } else {
        return {
          ...state,
          more: false,
        }
      }

/* ============== contact form ============== */

    case Action.name:
      return {
        ...state, name: action.payload
      }

    case Action.email:
      return {
        ...state, email: action.payload
      }

    case Action.message:
      return {
        ...state, message: action.payload
      }

/* ============== form validation ============== */
    case Action.blur:
      return { ...state, blur: true }

    case Action.showText:
      return {
        ...state,
        showText: true,
        name: '',
        email: '',
        message: '',
      }

    case Action.removeText:
      return {
        ...state,
        showText: false,
      }

    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initial)
  return (
    <BrowserRouter>
      <Navbar dispatch={dispatch} state={state} />
      <Routes>
        <Route path='/' element={<Home dispatch={dispatch} state={state} />} />
        {/* <Route path='/about' element={<About />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
