import { Feature } from '../../components'
import './whatGPT3.css'

function WhatGPT3() {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className='gpt3__whatgpt3-feature'>
        <Feature 
          title='What is GPT-3'
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi asperiores sequi aspernatur cum fugiat sapiente modi qui ratione fuga, ipsum omnis doloremque reiciendis dolorum esse dignissimos! Iure, numquam deserunt."
        />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quisquam magnam quo a, eligendi aspernatur." 
        />
        <Feature 
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, incidunt? Cum assumenda nesciunt rerum culpa labore quibusdam doloribus autem accusantium."
        />
        <Feature
         title="Education"
         text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore cupiditate iste neque, veniam fuga tenetur debitis qui aspernatur suscipit ex."
        />
      </div>
    </div>
  )
}

export default WhatGPT3

