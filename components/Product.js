import Image from 'next/image'


const Product = ({product}) => {
    return ( 
        <>
        <div className="card m-4" style={{width: 18 + 'rem' }}>
            <Image src={product.image} alt={`${product.title} image`} width={300} height={300} />
            
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                    {product.description}
                </p>
                <p className="card-text price">
                    {product.price}
                </p>
            </div>
        </div>
        </>
     );
}
 
export default Product;