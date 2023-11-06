import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'

const Header = () => {
  console.log()
  return (
    <div className="header-container">
      <div className="header-internal-container">
        <h1>E-Commerce</h1>
        <div className="cart-container">
          <AiOutlineShoppingCart className="cart-icon" />
        </div>
      </div>
    </div>
  )
}

export default Header
