import { Link } from 'react-router-dom';
import { catalog } from '../data/products.ts';


export function ProductsPage() {
   return (
     <div className="text-center p-5">
       <h5 className="text-x1 font-bold text-slate-60">
         Here are some great tools for React
       </h5>
 
       <ul className="list-none m-0 p-0">
         {catalog.map((product) => (
           <li key={product.id} className="p-1 text-base text-slate-800">
             <Link to={`${product.id}`}>
               {product.name}
             </Link>
           </li>
         ))}
       </ul>
     </div>
   );
 
 }