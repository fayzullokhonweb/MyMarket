import { useContext } from "react";
import { GlobalContext } from "../context/useGlobal";
function Cart() {
  const { data } = useContext(GlobalContext);
  console.log(data);

  return (
    <>
      {data && (
        <div className="align-content">
          <h1 className="text-3xl font-bold mb-10">{}</h1>
        </div>
      )}
    </>
  );
}

export default Cart;
