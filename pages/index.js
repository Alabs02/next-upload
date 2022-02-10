
import useUser from './../hooks/User';
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
      <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"/>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"/>
      <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"/>

      <CreateProduct />
       

      <div className="row w-100 d-flex justify-content-center mt-5">
        {data.map(product => (  
            <Product key={product.id} product={product} />
        ))}
       
      </div>

    
    </div>
  )

}
