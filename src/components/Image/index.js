import { useState } from "react";
import image from "../../asset";

function Imagge({
  src,
  alt,
  fallback: customFalback = image.noImage,
  ...props
}) {
  const [fallback, setFallback] = useState("");
  const handleError = () => {
    setFallback(customFalback);
  };
  return (
    <img src={fallback || src} alt={alt} {...props} onError={handleError} />
  );
}

export default Imagge;
