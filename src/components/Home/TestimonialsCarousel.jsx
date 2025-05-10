import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    stars: 5,
    text: "Their team delivered beyond expectations — fast, reliable, and always responsive. Truly a trusted partner for growth.",
    name: "Emily Carter",
    role: "Head of Growth - NovaTech Labs",
    avatar: "user1",
    companyLogo: "company1",
  },
  {
    stars: 5,
    text: "We improved performance significantly after working with them. The technical expertise they bring is impressive.",
    name: "James Thornton",
    role: "CTO of CoreLogic Systems",
    avatar: "user2",
    companyLogo: "company2",
  },
  {
    stars: 5,
    text: "Our product's user experience transformed completely. Their design approach is sharp, clean, and focused.",
    name: "Sophie Lee",
    role: "Product Manager of PixelForge",
    avatar: "user3",
    companyLogo: "company3",
  },
  {
    stars: 5,
    text: "They felt like part of our in-house team. Efficient, proactive, and aligned with our long-term product vision.",
    name: "Liam Mitchell",
    role: "COO of Velocity Partners",
    avatar: "user4",
    companyLogo: "company4",
  },
  {
    stars: 5,
    text: "The ROI we've seen working with them has been exceptional. Our conversion rates doubled within three months.",
    name: "Alex Rivera",
    role: "Marketing Director - Quantum Solutions",
    avatar: "user5",
    companyLogo: "company5",
  },
];

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    initial: (direction) => ({
      x: direction * 100,
      opacity: 0,
      scale: 0.95,
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 1,
      },
    },
    exit: (direction) => ({
      x: -direction * 100,
      opacity: 0,
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 30,
      },
    }),
  };

  const starVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.5 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
      },
    }),
  };

  const avatarVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        delay: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <section className="md:py-20 bg-white text-center relative ">
      <motion.div initial="hidden" animate="visible" variants={titleVariants}>
        <h2 className="leading-10">
          <motion.span className="bg-gradient-to-r from-[#4885EF] via-[#C560CF] to-[#DA5381] font-normal md:text-5xl text-3xl bg-clip-text text-transparent"
            style={{ backgroundSize: "200% 100%" }}
            animate={{
              backgroundPosition: ["0% center", "100% center", "0% center"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            What Our Customers Say:
          </motion.span>
          <br />
          <span className="text-black font-normal md:text-5xl text-3xl">
            Real Stories of Success
          </span>
        </h2>
      </motion.div>

      <motion.div
        className="relative mt-16 flex justify-center items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Arrow */}
        <motion.button
          onClick={prev}
          className="absolute w-14 md:-ml-9 -ml-4 aspect-square left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg p-2 z-10 flex items-center justify-center hover:bg-gray-50"
          whileHover={{ scale: 1.2, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <ChevronLeft size={24} />
        </motion.button>

        <div className="grid md:grid-cols-2 gap-6 w-full">
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            {[activeIndex, (activeIndex + 1) % testimonials.length].map(
              (index, i) => {
                const testimonial = testimonials[index];
                return (
                  <div
                    key={`${index}-${i}`}
                    custom={direction}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="border border-gray-200 p-6 rounded-2xl text-left bg-white relative shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{
                      y: -5,
                      boxShadow:
                        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <div className="border-b border-gray-200 flex flex-col justify-between items-start pb-5">
                      <div className="flex items-center gap-2 py-4 justify-between w-full">
                        <div className="flex">
                          {Array(testimonial.stars)
                            .fill(0)
                            .map((_, starIndex) => (
                              <motion.div
                                key={starIndex}
                                custom={starIndex}
                                variants={starVariants}
                              >
                                <Star
                                  size={20}
                                  fill="#FFD700"
                                  color="#FFD700"
                                />
                              </motion.div>
                            ))}
                        </div>
                        <span
                          className="ml-auto text-base border border-gray-200 text-gray-500 px-3 py-2 rounded-full"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          Customer Testimonials
                        </span>
                      </div>
                      <motion.p
                        className="text-3xl font-normal tracking-tight text-gray-800"
                        variants={textVariants}
                      >
                        {testimonial.text}
                      </motion.p>
                    </div>
                    <div className="flex items-center justify-between mt-5">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden"
                          variants={avatarVariants}
                        >
                          <img
                            src={`/svgs/avatar.svg`}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <div className="font-medium text-lg text-gray-900">
                            {testimonial.name}
                          </div>
                          <div className="font-normal text-base text-gray-600">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                      <div
                        className="w-8 h-8"
                        initial={{ opacity: 0, rotate: -20 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.7, type: "spring" }}
                      >
                        <img
                          src={`/svgs/componyLogo.svg`}
                          alt="Company logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <motion.button
          onClick={next}
          className="absolute w-14 md:-mr-9 -mr-4 aspect-square right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg p-2 z-10 flex items-center justify-center hover:bg-gray-50"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <ChevronRight size={24} />
        </motion.button>
      </motion.div>

      {/* Pagination Dots */}
      {/* <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => {
              setDirection(i > activeIndex ? 1 : -1);
              setActiveIndex(i);
            }}
            className={`w-2 h-2 rounded-full ${i === activeIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: i === activeIndex ? 1.5 : 1,
              backgroundColor: i === activeIndex ? '#3B82F6' : '#D1D5DB',
              transition: { delay: 0.6 + i * 0.1 }
            }}
          />
        ))}
      </div> */}
    </section>
  );
};

export default TestimonialsCarousel;
