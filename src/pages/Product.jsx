import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function Product() {
  const { id, title } = useParams();
  const {
    data: product,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/products/" + id);

  const addDocToDB = async () => {
    await addDoc(collection(db, "products"), product);
  };
  return (
    <>
      {product && (
        <div className="align-content lg:flex gap-32 items-center ">
          <div>
            <h1 className="text-3xl mr-2 mb-4">Product - {product.title} </h1>

            <div className="carousel carousel-center max-w-2xl  p-3 space-x-4 bg-neutral rounded-box mb-7">
              {product.images.map((image) => {
                return (
                  <div key={image} className="carousel-item">
                    <img
                      src={image}
                      className="rounded-box max-h-60 lg:max-h-96 object-cover h-full "
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="shadow-xl p-6 lg:p-11 rounded-lg">
            <div className="flex items-center mb-3 gap-10">
              <h2 className="text-3xl ">Brand : {product.brand}</h2>
              <button onClick={addDocToDB} className="btn btn-primary">
                Add To Cart
              </button>
            </div>
            <h2 className="text-2xl mb-3">Rating : {product.rating}</h2>
            <h3 className="text-2xl mb-3">Price : {product.price}</h3>
            <h3 className="text-2xl mb-3">
              Discount : %{product.discountPercentage}
            </h3>
            <p className=" text-2xl"> Description : {product.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
