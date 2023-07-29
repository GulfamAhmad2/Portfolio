
import { Action } from "../App"
import SingleProject from "../Components/SingleProject"
import { Img } from "../Components/prData"

const Project = (props) => {
  const { dispatch, state } = props
  return (
    <section className="project" id='project'>
      <h3 className="headings ">Project</h3>
      <div className="pr-container">
        {
          !state.more ? Img.slice(0, 6).map((data) => <SingleProject key={data.id} data={data} />) : Img.map((data) => <SingleProject key={data.id} data={data} />)
        }
      </div>
      <div className="pr-more-btn">
        <button onClick={() => dispatch({ type: Action.more })} className="more-btn" >{!state.more? 'More' : 'Less'}</button>

      </div>
    </section>
  )
}

export default Project