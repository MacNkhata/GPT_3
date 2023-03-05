import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

function Header() {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
          <h1 className='gradient__text'>
            Let's Build Something Amazing with GPT-3 OpenAI
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quam odit eveniet aliquam numquam possimus quod debitis, fugiat, placeat eius facilis? Itaque consequuntur quibusdam, fugiat animi, repellat, doloribus eius illo incidunt mollitia qui corrupti.
          </p>
          <div className='gpt3__header-content__input'>
            <input type="email" placeholder='Your Email Address' />
            <button>Get Started</button>
          </div>
          <div className='gpt3__header-content__people'>
            <img src={people} alt="users" />
            <p>1,600 people requested access to visit in last 24 hours</p>
          </div>
      </div>
      <div className='gpt3__header-image'>
            <img src={ai} alt="ai" />
          </div>
    </div>
  )
}

export default Header