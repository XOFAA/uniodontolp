import React, { useEffect, useState } from "react";
import Preloader from "../preloader/Preloader";


function AppWithPreloader({ children }) {
  const [loadedImages, setLoadedImages] = useState(0);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    setTotalImages(images.length);

    const handleImageLoad = () => {
      setLoadedImages((prevLoadedImages) => prevLoadedImages + 1);
    };

    images.forEach((image) => {
      if (image.complete) {
        handleImageLoad();
      } else {
        image.addEventListener("load", handleImageLoad);
      }
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener("load", handleImageLoad);
      });
    };
  }, []);

  return loadedImages < totalImages ? <Preloader /> : children;
}

export default AppWithPreloader;
