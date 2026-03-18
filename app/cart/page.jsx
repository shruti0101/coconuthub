"use client"

import { useCartStore } from "@/store/cart"
import { Plus, Minus, Trash2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function CartPage() {

  const { cart, removeItem, updateQty, totalPrice } = useCartStore()

  return (

    <div className="bg-[#f5f5f5] min-h-screen">
 <section
  style={{ backgroundImage: "url(/xx.png)" }}
  className="relative py-40 text-center bg-center bg-cover text-white overflow-hidden"
>

  <div className="absolute inset-0 bg-black/20" />

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 max-w-3xl mx-auto px-6"
  >

    <h1 className="text-4xl md:text-7xl font-semibold mb-6">
      Your Shopping Cart
    </h1>

    <p className="text-lg text-white/90 leading-relaxed">
      Review the premium dry fruits and dates you’ve selected. 
      Update quantities, remove items, and proceed to secure checkout 
      to enjoy fresh, high-quality products delivered to your doorstep.
    </p>

  </motion.div>

</section>
   


      <div className="max-w-7xl mx-auto py-12 px-6">

        {cart.length === 0 && (

          <div className="bg-white rounded-xl p-20 text-center shadow">

            <h2 className="text-xl mb-4">
              Your cart is empty
            </h2>

            <Link
              href="/"
              className="bg-green-600 text-white px-6 py-3 rounded-lg"
            >
              Continue Shopping
            </Link>

          </div>

        )}

        {cart.length > 0 && (

          <div className="grid lg:grid-cols-[2fr_1fr] gap-10">

            {/* LEFT CART */}
            <div>

              {/* FREE SHIPPING */}
              <div className="border-2 border-dashed border-gray-300 p-6 mb-8 bg-white">

                <p className="text-lg font-semibold mb-4">
                  Your order qualifies for free shipping!
                </p>

                <div className="h-3 bg-red-200 rounded-full overflow-hidden">

                  <div className="h-full w-full bg-red-500" />

                </div>

              </div>


              {/* CART TABLE */}
              <div className="bg-white shadow rounded-lg overflow-hidden">

                {/* HEADER */}
                <div className="grid grid-cols-4 text-sm font-semibold text-gray-600 border-b p-4">

                  <span>PRODUCT</span>
                  <span>PRICE</span>
                  <span>QUANTITY</span>
                  <span>SUBTOTAL</span>

                </div>


                {cart.map((item, index) => (

                  <div
                    key={index}
                    className="grid grid-cols-4 items-center p-6 border-b"
                  >

                    {/* PRODUCT */}
                    <div className="flex items-center gap-4">

                      <button
                        onClick={() => removeItem(item.name)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>


<div className="flex flex-col items-center">

                      <Image
                        src={item.image}
                        width={70}
                        height={70}
                        alt={item.name}
                        className="rounded-md"
                      />

                      <div>
                   

                        <h3 className="font-medium">
                          {item.name}
                        </h3>
                      

                        <p className="text-gray-500 text-sm">
                          ₹{item.price} per kg
                        </p>

                      </div>
</div>

                    </div>


                    {/* PRICE */}
                    <div className="text-lg font-medium">
                      ₹{item.price}
                    </div>


                    {/* QUANTITY */}
                    <div>

                      <div className="flex items-center border w-fit">

                        <button
                          onClick={() =>
                            updateQty(item.name, item.quantity - 1)
                          }
                          className="px-3 py-2 hover:bg-gray-100"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="px-4">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQty(item.name, item.quantity + 1)
                          }
                          className="px-3 py-2 hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </button>

                      </div>

                    </div>


                    {/* SUBTOTAL */}
                    <div className="text-xl font-semibold text-red-600">

                      ₹{item.price * item.quantity}

                    </div>

                  </div>

                ))}

              </div>

            </div>



            {/* RIGHT SUMMARY */}
            <div className="bg-white shadow-xl p-8 h-fit sticky top-24 border">

              <h2 className="text-xl font-semibold mb-6">
                CART TOTALS
              </h2>

              <div className="space-y-6">

                <div className="flex justify-between text-gray-600">

                  <span>Subtotal</span>
                  <span>₹{totalPrice()}</span>

                </div>

                <div className="border-t pt-6 flex justify-between text-2xl font-bold text-red-700">

                  <span>Total</span>
                  <span>₹{totalPrice()}</span>

                </div>

              </div>


              <Link
                href="/checkout"
                className="block text-center mt-8 bg-[#86b738] hover:bg-[#6ea02c] text-white py-4 font-semibold tracking-wide"
              >
                PROCEED TO CHECKOUT
              </Link>

            </div>

          </div>

        )}

      </div>

    </div>

  )
}