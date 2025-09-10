import react from 'react'
import { Container } from 'react-bulma-components'
import ProductHeader from './ProductHeader'
import AddButton from './AddButton'
import Loading from './Loading'

const ProductLayout = () => {
  return (
    <>
      <Container>
        <ProductHeader title='Products List' />
        <AddButton text='Add button'></AddButton>
        <Loading></Loading>
      </Container>
    </>
  )
}

export default ProductLayout
