
import Product from '../components/Product';
import CreateProduct from '../components/Upload';
import Script from 'next/script';


// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}


export default function Home({data}) {
  // create a random unique reference number
  

  

  return (
    <div >
    


    
      <CreateProduct />
       

      <div className="row w-100 d-flex justify-content-center mt-5">
        {data.map(product => (  
            <Product key={product.id} product={product} />
        ))}
       
      </div>

    
    </div>
  )

}
