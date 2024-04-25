import React, { useState } from "react";
import "./title.css";
import { motion } from "framer-motion";

const Title = ({ first, second, image }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href="/"
            className="title-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h1>{first}</h1>
            <motion.img
                src={image}
                alt="image of nature"
                animate={{
                    width: isHovered ? "6rem" : "0rem",
                    opacity: isHovered ? "100%" : "0%",
                    padding: isHovered ? "0 0.75rem" : "0rem",
                }}
                transition={{ duration: "0.5", ease: "backOut" }}
            />
            <h1>{second}</h1>
        </a>
    );
};

export default Title;
