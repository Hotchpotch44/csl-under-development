import { motion } from 'framer-motion';
import { FaBuromobelexperte } from 'react-icons/fa';
import { PiFlaskDuotone, PiPackageDuotone, PiCarDuotone } from 'react-icons/pi';

const IndustryCards = () => {
    const cards = [
        {
            title: "Chemical Manufacturing",
            image: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
            icon: PiFlaskDuotone,
            color: "var(--accent)",
        },
        {
            title: "Packaging Solutions",
            image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
            icon: PiPackageDuotone,
            color: "var(--primary)",
        },
        {
            title: "Automotive Chemistry",
            image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
            icon: PiCarDuotone,
            color: "var(--secondary)",
        },
    ];

    return (
        <section className="relative bg-[var(--muted)]/30 min-h-[100vh] py-[5vw] overflow-hidden">
            {/* Floating background icon */}
            <FaBuromobelexperte className="text-[20vw] absolute text-[var(--primary)]/10 right-0 top-[30%] floating" />

            {/* Header Section */}
            <div className="max-w-[80vw] mx-auto flex flex-col md:flex-row items-center gap-[5vw] px-[3vw]">
                {/* Left Title */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative"
                >
                    <h2 className="md:text-[4.5vw] text-4xl font-bold text-[var(--primary)] md:leading-[5vw]">
                        Explore Our Expertise
                    </h2>
                    <div className="w-[0.1vw] h-[60vh] top-[80%] left-[-5vw] absolute mx-auto border border-[var(--primary)]" />
                </motion.div>

                {/* Right Description */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex-1 md:max-w-[35vw]"
                >
                    <p className="md:text-[1.2vw] text-sm text-gray-700 md:leading-[2vw]">
                        Chemid Inc. is committed to advancing sustainable material solutions and cutting-edge recycling technologies,
                        driving a cleaner and more sustainable future for the benefit of future generations.
                    </p>
                </motion.div>
            </div>

            {/* Divider */}
            <div className="w-[90vw] mx-auto mt-[5vw] border border-[var(--primary)]"></div>

            {/* Cards Section */}
            <div className="max-w-[80vw] h-auto relative mx-auto mt-[5vw] px-[2vw]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3vw]">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="relative group cursor-pointer"
                        >
                            {/* Image Card */}
                            <div className="relative overflow-hidden rounded-[1.5vw] shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <div className="w-full md:h-[20vw] overflow-hidden rounded-[1.5vw]">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Icon Badge */}
                                <div
                                    className="absolute bottom-[1.5vw] right-[1.5vw] md:w-[3.5vw] md:h-[3.5vw] h-[10vw] w-[10vw] rounded-full flex items-center justify-center text-white shadow-md"
                                    style={{
                                        background: card.color,
                                        boxShadow: '0 0.5vw 1vw rgba(0,0,0,0.1)',
                                    }}
                                >
                                    <card.icon className="md:w-[1.8vw] md:h-[1.8vw] w-[8vw] h-[8vw]" />
                                </div>
                            </div>

                            {/* Title */}
                            <h3
                                className="mt-[1.5vw] md:text-[1.5vw] font-semibold text-center"
                                style={{ color: 'var(--text)' }}
                            >
                                {card.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryCards;
