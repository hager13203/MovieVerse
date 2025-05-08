import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft, FaPlay, FaStop } from "react-icons/fa";
import img1 from "../assets/images/movie1.jpg";
import img2 from "../assets/images/movie2.jpg";
import img3 from "../assets/images/movie3.jpg";
import img4 from "../assets/images/movie4.jpg";

let intervalId = null;

const SlideShow = () => {
  let [imgs, setImgs] = useState([
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const NextImg = () => {
    setCurrentIndex((prev) => (prev + 1) % imgs.length);
    clearInterval(intervalId); 
  };
  const PrevImg = () => {
    setCurrentIndex((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
    clearInterval(intervalId); 
  };
  useEffect(() => {
    const intervalId = setInterval(NextImg, 5000); 
    return () => clearInterval(intervalId); 
  }, []);

  return (
       <div className="position-relative text-center text-white">
           <img
             src={imgs[currentIndex].url}
             alt="Banner"
             className="img-fluid w-100"
             style={{
               height: "100vh",
               objectFit: "cover",
               filter: "brightness(70%)",
             }}
           />
           <div className="position-absolute top-50 start-50 translate-middle">
             <h1 className="display-4 fw-bold">Welcome to MovieVerse</h1>
             <p className="lead">Explore trending films and fan favorites</p>
           </div>
   
           {/* Controls with icons */}
           <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex gap-3">
             <button className="btn btn-outline-light" onClick={PrevImg}>
               <FaArrowLeft size={24} />
             </button>
             <button className="btn btn-outline-light" onClick={NextImg}>
               <FaArrowRight size={24} />
             </button>
           
         
           </div>
         </div>
  );
};

export default SlideShow;
