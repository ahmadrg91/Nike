import { thumbnailShoe1 } from "../../assets/images"
import ProductCard from "../../components/ProductCard"

const Products = () => {
  return (
    <main>
        <section id="products">
            <ProductCard imgURL={thumbnailShoe1} name="Nike Air Jordan" price={200} ratings={4}/>
        </section>
    </main>
  )
}

export default Products