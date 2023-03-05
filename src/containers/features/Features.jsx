import { Feature } from '../../components'
import './features.css'


const featuresData = [
  {
    title: "Improving and distrusts instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab laborum dolorem magni perspiciatis, fugit ipsum dolor incidunt et quisquam in. Debitis minima illum doloremque."
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab laborum dolorem magni perspiciatis, fugit ipsum dolor incidunt et quisquam in. Debitis minima illum doloremque."
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab laborum dolorem magni perspiciatis, fugit ipsum dolor incidunt et quisquam in. Debitis minima illum doloremque."
  },
  {
    title: "Really boy law county",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab laborum dolorem magni perspiciatis, fugit ipsum dolor incidunt et quisquam in. Debitis minima illum doloremque."
  }
]

function Features() {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need to Realize it. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {
          featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} />
          ))
        }
      </div>
    </div>
  )
}

export default Features