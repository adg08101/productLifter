import react from 'react'
import { Section, Loader, Container } from 'react-bulma-components'

const Loading = () => {
  return (
    <div className='is-flex columns is-centered'>
      <Loader style={{
        width: 100,
        height: 100
      }}
      />
    </div>
  )
}

export default Loading
