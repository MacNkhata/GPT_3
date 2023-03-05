import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

function Possibility() {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond our imagination
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam sed fugit, omnis enim provident quod. Aspernatur vero, possimus itaque tempora ipsum incidunt sed nemo doloribus quia eos magni.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility