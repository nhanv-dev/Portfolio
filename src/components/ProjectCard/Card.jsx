import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item, index, color }) => {
    let className = "mt-[0px] "
    if (index % 2 === 1) className += "lg:mt-[32px] "

    return (
        <Link to={item.slug} className={`group block ${className}`}>
            <div>{index + 1}</div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative"
            >
                <div className="relative group p-[48px] rounded-3xl mb-4" style={{ backgroundColor: color }}>
                    <motion.div
                        className="w-full h-[270px] relative rounded-2xl border-[4px] border-white bg-center bg-cover"
                        whileHover={{ scale: 1.025 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            backgroundImage: `url(${item.card_image})`,
                            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                        }}
                    />
                </div>
                <h5 className="text-white font-semibold text-[1.4rem]">
                    {item.card_title}
                </h5>
            </motion.div>
        </Link>
    )
}
export default Card;
