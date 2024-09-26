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

  const cartListOnDesktop = "md:fixed md:top-[150px]";
  const cartListOnMobile = "overflow-x-auto";

  return (
    <>
      <div className="flex flex-col lg:flex-row sm:flex-col justify-center gap-24 md:pt-14 pt-10 md:pb-32 pb-14 p-4 bg-white">
        <div className="flex flex-col items-start md:w-1/2 w-full">
          <div className={`${cartListOnDesktop} ${cartListOnMobile} w-full`}>
            <h1 className="text-[24px] font-medium pb-4 md:pt-10 pt-0 text-black">
              Shopping Cart
            </h1>

            <hr className="border md:w-0 " />

            {loading ? (
              // Show skeleton loader table while loading
              <SkeletonLoader />
            ) : (
              <section>
                {/* List card on mobile */}

                {cartData.map((data) =>
                  data.products.map((item) => (
                    <div className="mt-6 md:hidden flex justify-center gap-12 bg-white">
                      {/* img cart */}
                      <div className="relative overflow-hidden w-[150px] h-[150px] border rounded-2xl">
                        <img
                          src={photo}
                          alt=""
                          className="object-cover w-[150px] h-[150px]"
                        />
                      </div>
                      {/* end img cart */}

                      {/* name product */}

                      <div className="flex flex-col">
                        <h1 className="text-black text-[18px] font-semibold">
                          Dummy Product
                        </h1>
                        <p className="text-slate-600 text-[14px]">
                          Qty : {item.quantity}
                        </p>
                        <p className="text-slate-800 font-semibold text-[16px]">
                          IDR 10.xxx.xxx
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <button
                          onClick={() => alert("comingsoon")}
                          className="bg-slate-100 focus:outline-none text-slate-500"
                        >
                          x
                        </button>
                      </div>

                      {/* end name product */}
                    </div>
                  ))
                )}
                {/* end List card on mobile */}

                {/* TABLE FOR DESKTOP */}
                <table className="table-auto w-full md:block hidden text-left md:text-[18px] text-[12px] text-black border-collapse">
                  <thead className="bg-gray-100">
                    <tr className="border-b">
                      <th className=" md:px-2 px-auto py-2">Photo </th>
                      <th className="md:px-8 px-auto py-2">Product</th>
                      <th className="md:px-2 px-auto py-2">Quantity</th>
                      <th className="md:px-8 px-auto py-2">Date</th>
                      <th className="md:px-8 px-auto py-2">Action</th>
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
                          <td className="px-8 py-2">
                            {item.date.split("T")[0]}
                          </td>
                          <td className="px-8 py-2">
                            <button className="bg-slate-100 text-slate-500">
                              x
                            </button>
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
                {/* // END TABLE FOR DESKTOP */}
              </section>
            )}
          </div>
        </div>

        <CheckoutForm />
      </div>
      <hr className="border-1 " />
    </>
  );
}
