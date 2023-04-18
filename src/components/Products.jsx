
import ProductItem from "./ProductItem"
import productData from "../productData"

const Products = (props) => {
  // console.log(productData)
  return (
    <div className="grid grid-cols-3 gab-10 mb-8">
      {productData.map((product)=>(<ProductItem key={product.id} product={product} card={props.card} setCard={props.setCard}/>))}
    </div>
  )
}

export default Products
