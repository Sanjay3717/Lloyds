import {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import './index.css'

const ProductEachItem = props => {
  const [count, updateCount] = useState(0)
  console.log()
  const {products} = props
  const {name, id, weight, price, image} = products
  console.log(id)
  const onIncrement = () => {
    const {count} = this.state
    updateCount(prevState => prevState.count + 1)
    console.log(count)
  }

  return (
    <div className="product-container">
      <img src={image} alt={name} className="product-image" />
      <button type="button" className="product-count-button">
        <AiOutlinePlus className="plus-icon" onClick={onIncrement} />
      </button>
      <h1>{price}</h1>
      <h2>{name}</h2>
      <p>{weight}</p>
    </div>
  )
}

export default ProductEachItem
