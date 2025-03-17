import React, { useState, useEffect } from "react";

const ProductCard = () => {
  return (
    <div class="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-4">
    <div
      class="max-w-md w-full bg-white hover:bg-gray-600 hover:text-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
      <div class="relative">
        <img class="w-full h-64 object-cover" src="https://tse2.mm.bing.net/th?id=OIP.jTwF8q2LpQ4a88q0kLPKpAHaEK&pid=Api&P=0&h=180" alt="Nature scene"/>
       
      </div>
      <div class="p-6">
        <h2 class="text-2xl font-bold mb-2">Discover Nature's Beauty</h2>
        <p class=" mb-4">Immerse yourself in the tranquil landscapes and breathtaking vistas of the natural
          world.</p>
       
        <div class="flex justify-between items-center">
          <span class="text-2xl font-bold ">$299</span>
          <button class="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out">
            Book Now
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold">Sale Ends In:</h3>
      <p className="text-xl font-bold">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </p>
    </div>
  );
};

const ImageGallery = () => {
  const images = [
    { id: 1, src:  "https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Nature-Full-HD-Images-For-Desktop.jpg", category: "Nature" },
    { id: 2, src: "https://wallpapercave.com/wp/wp1877444.jpg", category: "Technology" },
    { id: 3, src: "https://images6.alphacoders.com/676/thumb-1920-676321.jpg", category: "Art" },
    { id: 4, src: "http://getwallpapers.com/wallpaper/full/d/9/f/820882-full-hd-nature-wallpapers-2560x1440-notebook.jpg", category: "Nature" },
    { id: 5, src: "https://cdn.wallpapersafari.com/94/68/lOsTXu.jpg", category: "Technology" },
  ];

  const [filter, setFilter] = useState("All");

  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter);

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        {["All", "Nature", "Technology", "Art"].map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg hover:scale-105 duration-150 hover:bg-gray-600 hover:text-white ${filter === category ? "bg-blue-500 hover:bg-blue-700 text-white" : "bg-gray-200"}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        {filteredImages.map(img => (
          <img key={img.id} src={img.src} alt={img.category} className="rounded-lg shadow-lg hover:scale-105 duration-100" />
        ))}
      </div>
    </div>
  );
};

const ProductCards = () => {
  return (
    <div className="container mx-auto p-6  ">
      <CountdownTimer targetDate={new Date().getTime() + 1000 * 60 * 60 * 24 * 2} />
      <ImageGallery />
    </div>
  );
};

export default ProductCards;
