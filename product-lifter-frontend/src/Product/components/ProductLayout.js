import { react, useState } from 'react'
import { Button, Container, Section, Box, Tag } from 'react-bulma-components'
import ProductHeader from './ProductHeader'
import AddButton from './AddButton'
import Loading from './Loading'

const ProductLayout = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <ProductHeader title='Products List' />
      <Section>
        <AddButton text='Add button' />
        {isLoading
          ? <Loading />
          : <Tag>do_fetch</Tag>}
      </Section>
      <Section>
        <Button
          onClick={() => {
            setIsLoading(!isLoading)
          }}
        >
          {isLoading ? 'do_the_fetch' : 'stop_the_fetch'}
        </Button>
      </Section>
    </>
  )
}

export default ProductLayout
