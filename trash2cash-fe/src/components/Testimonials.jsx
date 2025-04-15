import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';


const testimonials = [
  {
    name: "Amelia Joseph",
    role: "Chief Manager",
    text: "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    bgColor: "bg-blue-600",
    textColor: "text-white"
  },
  {
    name: "Jacob Joshua",
    role: "Chief Manager",
    text: "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it’s got to be Embrace!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    bgColor: "bg-white",
    textColor: "text-black"
  },
  {
    name: "Jacob J.",
    role: "Chief Manager",
    text: "Embrace really nails it! Creative and approachable style. They're the real deal where artistry meets strategy. Thrilled with what we achieved!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    bgColor: "bg-white",
    textColor: "text-black"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);
  const handleNext = () => setIndex((index + 1) % testimonials.length);
  const navigate = useNavigate(); 


  return (
    <div className="px-6 md:px-20 lg:px-40 py-16 bg-white text-black">
      {/* Header Section */}
      <div className="bg-[#1d1d3f] rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center mb-16">
        <div>
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">Let’s Learn How To Upload Now!</h2>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-full"
            onClick={() => navigate('/uploadimage')}>Start Now
          </button>
        </div>
        <div className="mt-8 md:mt-0">
          <div className="bg-lime-300 rounded-full w-36 h-36 flex items-center justify-center">
            <svg width="50" height="50" fill="none" stroke="#1d1d3f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 25 L20 10" />
              <path d="M20 10 L35 25" />
              <path d="M35 25 L45 15" />
            </svg>
          </div>
        </div>
      </div>

      {/* Title */}

      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        What Our Users Said About Us
      </h2>

      <div className="flex items-center justify-center gap-4 mb-8">
        <button onClick={handlePrev} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-black">
          <ArrowLeft size={20} />
        </button>
        <button onClick={handleNext} className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white">
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
            className={`rounded-2xl p-8 w-full max-w-xl shadow-md ${testimonials[index].bgColor} ${testimonials[index].textColor}`}
          >
            <div className="flex items-center mb-4 gap-4">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{testimonials[index].name}</h3>
                <p className="text-sm opacity-80">{testimonials[index].role}</p>
              </div>
            </div>
            <p className="leading-relaxed text-base opacity-90">{testimonials[index].text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
