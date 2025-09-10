import react from 'react'
import { Section, Hero, Heading } from 'react-bulma-components'

const ProductHeader = ({ title }) => {
  return (
    <Section>
      <Hero>
        <Hero.Header>

        </Hero.Header>
        <Hero.Body>
          <Heading class='title has-text-centered'>
            { title }
          </Heading>
        </Hero.Body>
      </Hero>
    </Section>
  )
}

export default ProductHeader
