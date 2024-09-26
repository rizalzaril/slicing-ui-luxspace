import { useEffect, useState } from "react";
import CheckoutForm from "./CheckOutForm";
import photo from "../../../assets/images/bangku1.png";

const SkeletonLoader = () => (
  <div className="animate-pulse">
    <div className="flex flex-col mb-4">
      <div className="h-6 bg-gray-300 rounded mb-2 w-1/4"></div>
      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
    </div>
    <div className="border-b border-gray-300">
      <div className="flex py-4">
        <div className="w-[80px] h-[80px] bg-gray-300 rounded-xl mr-4"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div className="w-12 h-8 bg-gray-300 rounded"></div>
      </div>
    </div>
  </div>
);

export default function CartItems() {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/user/2")
      .then((response) => response.json())
      .then((data) => {
        setCartData(data);
        setLoading(false); // Set loading to false after data is fetched
      });
  }, []);

  const totalPrice = cartData.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="flex flex-col lg:flex-row sm:flex-col justify-center gap-24 mt-14 mb-12 p-4 bg-white">
        <div className="flex flex-col items-start w-1/2">
          <div className="overflow-x-auto fixed top-[150px]">
            <h1 className="text-[24px] font-medium mb-4">Shopping Cart</h1>

            {loading ? (
              // Show skeleton loader while loading
              <SkeletonLoader />
            ) : (
              <table className="table-auto w-full text-left text-black border-collapse">
                <thead className="bg-gray-100">
                  <tr className="border-b">
                    <th className="px-2 py-2">Photo</th>
                    <th className="px-8 py-2">Product</th>
                    <th className="px-2 py-2">Quantity</th>
                    <th className="px-8 py-2">Date</th>
                    <th className="px-8 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((item) =>
                    item.products.map((product) => (
                      <tr
                        key={`${item.id}-${product.productId}`}
                        className="border-b"
                      >
                        <td className="px-2 py-2">
                          <div className="w-[80px] h-[80px] flex border rounded-xl justify-center overflow-hidden">
                            <img
                              src={photo}
                              alt=""
                              className="w-[80px] h-[80px] object-cover"
                            />
                          </div>
                        </td>
                        <td className="px-8 py-2">
                          <p className="font-normal text-black">
                            Dummy product
                          </p>
                          Office Room
                        </td>
                        <td className="px-2 py-2">{product.quantity}</td>
                        <td className="px-8 py-2">{item.date.split("T")[0]}</td>
                        <td className="px-8 py-2">
                          <button className="bg-slate-100">x</button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
                <tfoot>
                  <tr className="border-t">
                    <td colSpan="3" className="px-4 py-2 font-bold">
                      Total Price
                    </td>
                    <td className="px-4 py-2 font-bold">IDR {totalPrice}</td>
                  </tr>
                </tfoot>
              </table>
            )}
          </div>
        </div>

        <CheckoutForm />
      </div>
      <hr className="border-1 " />
    </>
  );
}
