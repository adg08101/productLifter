import React from 'react'
import PropTypes from 'prop-types'
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

ProductHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default ProductHeader
