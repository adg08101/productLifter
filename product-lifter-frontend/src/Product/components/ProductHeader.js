import react from 'react'
import { Section, Hero, Heading } from 'react-bulma-components'

const ProductHeader = ({ title }) => {
  return (
    <Hero>
      <Hero.Header />
      <Hero.Body>
        <Heading className='title has-text-centered'>
          {title}
        </Heading>
      </Hero.Body>
    </Hero>
  )
}

export default ProductHeader
