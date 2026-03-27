import React from 'react'

export default function FormLayout() {
    return (<div className='py-10 md:px-15 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className=''>
                <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-[30px] shadow-[0_40px_120px_rgba(0,0,0,0.15)] p-6">
                    <h3 className="text-3xl font-semibold mb-6 text-center">
                        Send Us a Message
                    </h3>

                    <form className="space-y-6">
                        <div className="relative">
                            <input
                                type="text"
                                required
                                className="peer w-full border-b border-gray-400 bg-transparent py-3 outline-none focus:border-[#6B091D]"
                            />
                            <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all 
                    peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#6B091D] 
                    peer-valid:-top-3 peer-valid:text-xs">
                                Your Name
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                required
                                className="peer w-full border-b border-gray-400 bg-transparent py-3 outline-none focus:border-[#6B091D]"
                            />
                            <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all 
                    peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#6B091D]
                    peer-valid:-top-3 peer-valid:text-xs">
                                Email Address
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="tel"
                                required
                                className="peer w-full border-b border-gray-400 bg-transparent py-3 outline-none focus:border-[#6B091D]"
                            />
                            <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all 
                    peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#6B091D]
                    peer-valid:-top-3 peer-valid:text-xs">
                                Phone Number
                            </label>
                        </div>

                        <div className="relative">
                            <textarea
                                rows="2"
                                required
                                className="peer w-full border-b border-gray-400 bg-transparent py-3 outline-none focus:border-[#6B091D]"
                            />
                            <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all 
                    peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#6B091D]
                    peer-valid:-top-3 peer-valid:text-xs">
                                Your Message
                            </label>
                        </div>

                        <button className="w-full bg-[#6B091D] text-white py-4 rounded-full font-medium tracking-wide hover:bg-[#540715] transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <div className="md:w-160 md:h-120">
                <img
                    src={"/aboutdateside.png"}
                    alt="Key Features"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
        </div>
    </div>)
}
