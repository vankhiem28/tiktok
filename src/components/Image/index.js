import React, { useState } from "react";
import { forwardRef } from "react";
import images from "~/assets/images";
const Image = forwardRef(({ src, ...props }, ref) => {
  const [fallback, setFallback] = useState("");

  const handleError = () => {
    setFallback(images.noImage);
  };

  return (
    <img ref={ref} src={fallback || src} {...props} onError={handleError} />
  );
});

export default Image;
