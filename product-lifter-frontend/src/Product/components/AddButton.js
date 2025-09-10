import react from 'react'
import { Section, Button } from 'react-bulma-components'

const AddButton = ({ text }) => {
  return (
    <Section className='is-pulled-right'>
      <Button color='info'>{ text }</Button>
    </Section>
  )
}

export default AddButton
