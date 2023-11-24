import React, { useEffect, useState } from "react";
import Preloader from "../preloader/Preloader";

function AppWithPreloader({ children }) {
  const [loadedImages, setLoadedImages] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const [errorImages, setErrorImages] = useState(0);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    setTotalImages(images.length);

    const handleImageLoad = () => {
      setLoadedImages((prevLoadedImages) => prevLoadedImages + 1);
    };

    const handleImageError = () => {
      setErrorImages((prevErrorImages) => prevErrorImages + 1);
    };

    images.forEach((image) => {
      if (image.complete) {
        handleImageLoad();
      } else {
        image.addEventListener("load", handleImageLoad);
        image.addEventListener("error", handleImageError);
      }
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener("load", handleImageLoad);
        image.removeEventListener("error", handleImageError);
      });
    };
  }, []);

  const allImagesLoaded = loadedImages + errorImages === totalImages;

  return allImagesLoaded ? children : <Preloader />;
}

export default AppWithPreloader;
