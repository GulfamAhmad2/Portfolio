import { Link } from 'react-router-dom'

const SingleProject = (props) => {
  const { data } = props
  
  
  return (
    <div>
      <div className='pr-img'>
        <div className='image'>
          <img  src={data.image} loading='lazy' />
        </div>
        <div className='pr-btn' >

          <Link to={data.live} target="_blank" >Live</Link>
          <Link to={data.sourceCode} target="_blank">Code</Link>
        </div>
      </div>
    </div>
  )
}

export default SingleProject