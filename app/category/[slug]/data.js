import {
    Leaf,
    ShieldCheck,
    Package,
    IndianRupee,
    Truck,
    Store,
    Hotel,
    Factory,
    Gift,
    Home
} from "lucide-react";
import Link from "next/link";

export const categoryCityContent = {
    "dates-supplier": {
        mainImg: "/otherbg.webp",
        h2: (city) => `Your Trusted Dates Supplier in ${city}`,
        intro: (city) => (
            <>
                Vishal Enterprise is a{" "}
                <Link
                    href={`/products`}
                    className="text-amber-500 font-semibold hover:underline"
                >
                    trusted Dates Supplier in {city},
                </Link>{" "}
                known for delivering premium-quality dates to wholesalers, retailers, and businesses across the region. With extensive industry experience, we specialize in sourcing the finest varieties of dates from reliable farms and international markets, ensuring superior taste, freshness, and nutritional value. Our strict quality control, hygienic packaging, and timely delivery have helped us become a leading
                dates supplier in {city}.
            </>
        ),
        intro2: (city) => `We are committed to providing excellent service and competitive pricing while catering to both bulk and customized requirements. At Vishal Enterprise, our goal is to create long-term relationships through consistency, transparency, and customer satisfaction. We take pride in being a dependable dates supplier in ${city} for all your business and retail needs.`,
        introImg: "/ctaside.png",

        whyChooseHeading: (city) => `Why We Are the Preferred Choice for Dates Supplier in ${city}?`,
        whyChoose: (city) => [
            {
                title: "Premium Quality Sourcing",
                desc: `As a leading dates supplier in ${city}, Vishal Enterprise carefully sources our dates from trusted farms and reputed international suppliers. Each batch undergoes strict quality checks to ensure rich taste, natural sweetness, and superior freshness for our customers.`,
                icon: Leaf
            },
            {
                title: "Competitive Pricing",
                desc: `We provide the best value for money. Our strong supplier network allows us, as a top dates supplier in ${city}, to offer high-quality dates at competitive wholesale and retail prices, making us a cost-effective choice for businesses and retailers. `,
                icon: IndianRupee
            },
            {
                title: "Wide Variety of Dates",
                desc: `Vishal Enterprise, your reliable dates supplier in ${city}, offers an extensive range including Medjool, Ajwa, Kimia, Deglet Noor, Zahidi, and more. From premium gifting options to everyday consumption varieties, we have it all under one roof. `,
                icon: Factory
            },
            {
                title: "Bulk Availability & Flexible Orders",
                desc: `Specializing in bulk supply, we efficiently handle orders of any size. As a trusted dates supplier in ${city}, we also provide flexible solutions tailored to the needs of retailers, wholesalers, distributors, and corporate buyers. `,
                icon: Package
            },
            {
                title: "Hygienic Packaging & Storage",
                desc: `All our dates are packed using hygienic processes and stored in optimal conditions to preserve flavor, texture, and nutritional value. Quality and safety are our top priorities for every order from a reliable dates supplier in ${city}.`,
                icon: ShieldCheck
            },
            {
                title: `Timely Delivery Across ${city}`,
                desc: `With a well-managed supply chain and logistics network, Vishal Enterprise ensures fast and dependable delivery across ${city}. Whether it’s a regular supply or an urgent order, we deliver on time every time as a trusted dates supplier in ${city}`,
                icon: Truck
            }],

        Details: (city) => ({
            title: `Who We Serve – Bulk Buyers, Wholesalers & Retailers`,
            description: (
                <>
                    At Vishal Enterprise, a trusted{" "}
                    <Link
                        href={`/products`}
                        className="font-bold hover:underline"
                    >
                        dates supplier in {city},
                    </Link>{" "}
                    we are dedicated to serving businesses that require premium-quality dates in bulk. Our focus is on wholesalers, retailers, and bulk buyers across {city}, offering customized solutions, consistent supply, and unmatched quality. Whether you are running a supermarket, dry fruit shop, catering service, or corporate business, we ensure your orders are handled professionally and delivered on time.
                </>
            ),

            sections: [
                {
                    title: "Wholesalers",
                    point: `As a reliable dates supplier in ${city}, we provide large quantities of premium dates suitable for resale. With competitive pricing and bulk packaging options, wholesalers can confidently stock their inventory while maintaining product quality. Our flexible supply options cater to weekly, monthly, or seasonal demands.`

                },
                {
                    title: "Retailers",
                    point: `From supermarkets to local dry fruit stores, our wide variety of dates meets diverse customer preferences. Retailers benefit from customizable packaging, consistent stock availability, and the ability to source multiple varieties from a single trusted dates supplier in ${city}.`

                },
                {
                    title: "Bulk Buyers & Corporate Clients",
                    point: `Catering services, event planners, and hotels can rely on Vishal Enterprise, a preferred dates supplier in ${city}, for large-scale orders. We prioritize timely delivery, hygienic packaging, and product consistency, making us a trusted partner for corporate and institutional buyers. `

                },
                {
                    title: "Catering Services & Hotels",
                    point: `Freshness and quality are critical in hospitality. Our premium dates enhance culinary offerings, from buffets to festive events and gift hampers. As a dependable dates supplier in ${city}, we ensure businesses serve the best to their clients with reliable supply and professional service.`

                },
            ]
        }),

        KeyFeatures: {
            title: `Key Health Benefits:`,
            img: `/bowldate2.png`,
            heading:"Health Benefits of Dates",
            p: `Dates are not only delicious but also packed with essential nutrients, making them a healthy choice for daily consumption. By choosing premium dates from Vishal Enterprise, businesses and retailers can offer their customers a nutritious and natural energy booster.`,
            list: [
                "Rich in Natural Energy: Dates are a great source of natural sugars like glucose, fructose, and sucrose, providing instant energy. ",
                "High in Fiber: Supports digestion, prevents constipation, and promotes a healthy gut. ",
                "Packed with Antioxidants: Protects the body from harmful free radicals and promotes overall wellness. ",
                "Vitamins & Minerals: Contains essential nutrients like potassium, magnesium, and vitamin B6, which support heart health and strong bones. ",
                "Supports Heart Health: Dates help in regulating cholesterol levels and maintaining a healthy cardiovascular system. ",
                "Good for Brain Health: Antioxidants and nutrients in dates can enhance cognitive function and reduce inflammation. ",
            ]
        },

        faqs: (city) => ({
            title: `Frequently Asked Questions (FAQs) – Dates Supplier in ${city}`,

            items: [
                {
                    q: `What types of dates does Vishal Enterprise supply in ${city}`,
                    a: `As a trusted dates supplier in ${city}, Vishal Enterprise offers a wide range of premium dates including Medjool, Ajwa, Kimia, Deglet Noor, Zahidi, and more. Each variety is carefully sourced from reliable farms and international suppliers, ensuring freshness, natural sweetness, and consistent quality for both retail and bulk buyers.`
                },
                {
                    q: `Do you provide bulk orders for businesses in ${city}?`,
                    a: `Yes. We specialize in bulk supply for wholesalers, retailers, hotels, catering services, and corporate clients across ${city}. As a reliable dates supplier in ${city}, we handle orders of any size with flexible packaging and timely delivery to meet your business needs.`
                },
                {
                    q: "Can I get customized packaging for bulk orders?",
                    a: `Absolutely. Vishal Enterprise, a leading dates supplier in ${city}, provides tailored packaging solutions for retail stores, corporate gifts, festive hampers, or bulk wholesale requirements.`
                },
                {
                    q: "Are your dates fresh and hygienically packed?",
                    a: `Yes. Being a top dates supplier in ${city}, we maintain strict quality control standards. Every batch is cleaned, packed hygienically, and stored in optimal conditions to preserve flavor, freshness, and nutritional value.`
                },
                {
                    q: `Do you deliver dates across ${city}?`,
                    a: `Yes. As a trusted dates supplier in ${city}, we ensure timely and reliable delivery across all regions. Whether it’s a one-time bulk order or recurring supply, we guarantee your business will never run short of stock.`
                }
            ]
        }),
    },
};
