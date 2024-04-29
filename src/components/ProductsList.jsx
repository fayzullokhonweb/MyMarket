import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";

function ProductsList({ products }) {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products &&
        products.products.map((product) => {
          return (
            <li key={product.id} className="card  bg-base-100 shadow-xl">
              <figure className="border-b-2 border-red-300">
                <img
                  src={product.thumbnail}
                  className="w-full h-56 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="line-clamp-3">{product.description}</p>
                <div className="card-actions justify-between items-center">
                  <p className="text-3xl">${product.price}</p>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-primary"
                  >
                    <SlBasket />
                    Buy Now
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default ProductsList;
