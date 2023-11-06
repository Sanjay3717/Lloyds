import {Component} from 'react'
import ProductItemData from '../ProductItemData'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class ProductData extends Component {
  state = {productList: [], apiStatus: apiStatusConstants.initial, products: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {productList, apiStatus, products} = this.state
    this.setState({apiStatus: apiStatusConstants.loading})

    const url = 'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    const updatedData = fetchedData.categories

    this.setState({productList: updatedData})
  }

  render() {
    const {productList} = this.state
    console.log('State')

    return (
      <div className="main-container">
        <ul className="product-list">
          {productList.map(eachItem => (
            <li className="category-heading">{eachItem.name}</li>
          ))}
        </ul>
        <ul className="product-list">
          {productList.map(eachItem => (
            <li>
              <ProductItemData productList={eachItem} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default ProductData
