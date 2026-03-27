import { CatCites } from "../Data"
import Link from "next/link";
import React from "react";

const CategoryCitySection = () => {
    return (
        <>
            <section className="py-5 bg-[#faf7f2] md:px-15 px-4">
                <h2 className="my-2 text-2xl md:text-3xl font-bold text-black">Our Supply Network</h2>
                <div className="flex gap-2 px-3 flex-wrap overflow-hidden ">
                    {CatCites.map(({ href, label }, idx) => (
                        <Link
                            href={`/category${href}`}
                            key={idx}
                            className="hover:underline hover:scale-105 hover:duration-300 hover:text-amber-400"
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
};

export default CategoryCitySection;