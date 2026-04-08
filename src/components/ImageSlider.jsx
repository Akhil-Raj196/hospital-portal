import { useEffect, useState } from "react";

import ridhan1 from "../images/ridhan1.jpeg";
import ridhan2 from "../images/ridhan2.jpeg";
import ridhan3 from "../images/ridhan3.jpeg";
import ridhan4 from "../images/ridhan4.png";

const images = [ridhan1, ridhan2, ridhan3, ridhan4];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg">
      <img
        src={images[index]}
        alt="Hospital Slide"
        className="w-full h-[350px] md:h-[450px] object-cover transition-all duration-700"
      />
      <div className="flex justify-center gap-2 py-2 bg-white">
        {images.map((_, i) => (
          <span
            key={i}
            className={`inline-block w-3 h-3 rounded-full ${i === index ? "bg-blue-600" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
