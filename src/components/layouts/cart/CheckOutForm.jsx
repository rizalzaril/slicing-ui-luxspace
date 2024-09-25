import { useEffect, useState } from "react";
import courierImg1 from "../../../assets/images/dhl.png";
import courierImg2 from "../../../assets/images/fedex.png";

// Payment logo
import midtrans from "../../../assets/images/midtrans.png";
import masterCard from "../../../assets/images/mastercard.png";
import btc from "../../../assets/images/bitcoin.png";

// Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="space-y-4">
    <div className="h-6 bg-gray-300 rounded"></div>
    <div className="h-10 bg-gray-300 rounded"></div>
    <div className="h-10 bg-gray-300 rounded"></div>
    <div className="h-10 bg-gray-300 rounded"></div>
    <div className="h-10 bg-gray-300 rounded"></div>
    <div className="flex gap-8">
      <div className="h-[100px] w-[100px] bg-gray-300 rounded-xl"></div>
      <div className="h-[100px] w-[100px] bg-gray-300 rounded-xl"></div>
    </div>
    <div className="flex gap-8">
      <div className="h-[70px] w-[150px] bg-gray-300 rounded-xl"></div>
      <div className="h-[70px] w-[150px] bg-gray-300 rounded-xl"></div>
      <div className="h-[70px] w-[150px] bg-gray-300 rounded-xl"></div>
    </div>
    <div className="h-12 bg-slate-900 rounded"></div>
  </div>
);

const CheckoutForm = () => {
  const [loading, setLoading] = useState(true); // Loading state

  const labelPayments =
    "cursor-pointer w-[150px] h-[70px] justify-center bg-white overflow-hidden rounded-xl flex flex-col items-center peer-checked:bg-white peer-checked:border-2 peer-checked:border-blue-500 transition-all";
  const ImgPayments =
    "w-auto h-auto object-cover peer-checked:bg-white peer-checked:border-2 peer-checked:border-blue-500 transition-all ";

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after data is fetched
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="w-1/4 p-8 bg-[#F9F9F9] rounded-2xl">
      <h1 className="text-[24px] font-medium mb-4">Shipping Details</h1>
      {loading ? (
        // Show skeleton loader while loading
        <SkeletonLoader />
      ) : (
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Complete Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border rounded-md p-2 mt-1"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded-md p-2 mt-1"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="w-full border rounded-md p-2 mt-1"
              placeholder="Your Address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone number
            </label>
            <input
              type="number"
              id="phone"
              className="w-full border rounded-md p-2 mt-1"
              placeholder="+6289767676"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="payment" className="block text-sm font-medium mb-2">
              Choose Courier
            </label>
            <div className="flex gap-8">
              {/* Courier 1 */}
              <label className="cursor-pointer flex flex-col items-center">
                <input
                  type="radio"
                  name="courier"
                  value="courier1"
                  className="hidden peer"
                />
                <img
                  src={courierImg1}
                  alt="Courier 1"
                  className="w-[100px] h-[100px] object-contain rounded-xl peer-checked:border-2 peer-checked:border-blue-500"
                />
              </label>

              {/* Courier 2 */}
              <label className="cursor-pointer flex flex-col items-center">
                <input
                  type="radio"
                  name="courier"
                  value="courier2"
                  className="hidden peer"
                />
                <img
                  src={courierImg2}
                  alt="Courier 2"
                  className="w-[100px] h-[100px] object-contain rounded-xl peer-checked:border-2 peer-checked:border-blue-500"
                />
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="payment" className="block text-sm font-medium mb-2">
              Payment Method
            </label>

            <div className="flex gap-8">
              {/* Credit Card */}
              <label className={`${labelPayments}`}>
                <input
                  type="radio"
                  name="payment-method"
                  value="midtrans"
                  className="hidden peer"
                />
                <img
                  src={midtrans}
                  alt="Midtrans"
                  className={`${ImgPayments} object-contain`}
                />
              </label>

              {/* PayPal */}
              <label className={`${labelPayments}`}>
                <input
                  type="radio"
                  name="payment-method"
                  value="paypal"
                  className="hidden peer"
                />
                <img
                  src={masterCard}
                  alt="PayPal"
                  className={`${ImgPayments}`}
                />
              </label>

              {/* Bank Transfer */}
              <label className={`${labelPayments} `}>
                <input
                  type="radio"
                  name="payment-method"
                  value="bank-transfer"
                  className="hidden peer"
                />
                <img
                  src={btc}
                  alt="Bank Transfer"
                  className={`${ImgPayments} `}
                />
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-slate-900 rounded-[20px] text-white py-2 px-4 "
          >
            Place Order
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
