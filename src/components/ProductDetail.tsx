import { useParams } from "react-router-dom";
import { catalog } from '../data/products'

// the params type holds the id of the products/:id url
type Params = {
  id: string;
}

export const ProductDetail = () => {
  const params = useParams<Params>();
  const id = params.id === undefined ? undefined : parseInt(params.id);
  console.log('customer id', params.id);
  
  const product = catalog.find( 
    (item) => item.id === id
  );

  return (
    <div>
      { product === undefined ? (
        <h4>Unknown product</h4>
      ) : (
        <h4>{product.description}</h4>
      ) }
    </div>
  );
}