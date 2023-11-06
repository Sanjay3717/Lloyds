import {AiOutlineArrowRight} from 'react-icons/ai'
import ProductEachItem from '../ProductEachItem'
import './index.css'

const ProductItemData = props => {
  console.log()
  const {productList} = props
  const {name, products} = productList

  return (
    <div>
      <div className="product-heading-container">
        <h1>{name}</h1>
        <AiOutlineArrowRight className="title-arrow-mark" />
      </div>
      <div className="product-alignment">
        {products.map(eachItem => (
          <ProductEachItem products={eachItem} />
        ))}
      </div>
    </div>
  )
}

export default ProductItemData
