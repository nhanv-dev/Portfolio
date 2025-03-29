import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
const Card = ({ item, index, show }) => {
    let className = "mt-[0px] "
    if (index % 2 === 1) className += "lg:mt-[32px] "
    // if (index % 3 === 1) className += "lg:mt-[30px] "
    // if (index % 3 === 0) className += "lg:mt-[0px] "
    // if (index % 2 === 1) className += "md:mt-[30px] "
    // if (index % 2 === 0) className += "md:mt-[0px] "

    return (
        <Link to={item.slug} className={`group block ${className}`}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative"
            >
                <div className="relative group p-8 bg-white rounded-xl mb-4">

                    {/* Background tạo cảm giác màn hình */}
                    {/* <div className="absolute -inset-6 bg-pink-300 rounded-2xl shadow-lg group-hover:scale-105 transition-transform" /> */}


                    <motion.div
                        className="w-full h-[250px] relative rounded-xl border-2 bg-center bg-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        style={{ backgroundImage: `url(${item.card_image})` }}
                    />
                </div>
                <h5 className="text-white font-semibold text-[1.2rem]">
                    {item.card_title}
                </h5>
            </motion.div>
        </Link>
    )
}
export default Card;
