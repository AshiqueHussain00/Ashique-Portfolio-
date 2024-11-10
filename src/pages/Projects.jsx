import React from "react";
import Card from "../component/common/Card";
import { cardData } from "../data/Projects-data";
import { motion } from "framer-motion";

function Projects({ limit }) {
    // Animation variants for Framer Motion
    const cardVariants = {
        hidden: { opacity: 0, y: 50 }, // Initial state (hidden)
        visible: { opacity: 1, y: 0 }, // Final state (visible)
    };
    const headingVariants = {
        hidden: { opacity: 0, y: 20 }, // Initial state for the heading
        visible: { opacity: 1, y: 0 }, // Final state for the heading
    };
    // Limit the number of cards shown based on the 'limit' prop
    const limitedCardData = cardData.slice(0, limit);

    return (
        <section className="relative w-full">
            <div className="w-10/12 mx-auto mt-10 mb-10">
                <motion.h1
                    className="mb-10 text-3xl font-bold text-center "
                    variants={headingVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{
                        duration: 0.6, // Adjust duration as needed
                        delay: 0.1, // Delay before starting the animation
                    }}
                    viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the heading is in view
                >
                    {" "}
                    My Project
                </motion.h1>
                <div className="flex flex-wrap gap-6 ">
                    {limitedCardData.map((data, index) => (
                        <motion.div
                            key={data.id}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{
                                duration: 0.4, // Adjust duration if needed
                                delay: index * 0.2, // Stagger animation for each card
                            }}
                            viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of card is in view
                        >
                            <Card
                                title={data.title}
                                description={data.description}
                                technologies={data.technologies}
                                image={data.image}
                                link1={data.link}
                                link2={data.link2}
                                buttonText1={data.buttonText1}
                                buttonText2={data.buttonText2}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
