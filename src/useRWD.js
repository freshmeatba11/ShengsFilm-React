import { useState, useEffect } from "react";

const useRWD = () => {
  const [device, setDevice] = useState("mobile");
  const handleRWD = () => {
    if (window.innerWidth <= 992) setDevice("mobile");
    else setDevice("PC");
  };

  useEffect(() => {
    handleRWD();
    window.addEventListener("resize", handleRWD);
    return () => {
      window.removeEventListener("resize", handleRWD);
    };
  }, []);

  return device;
};

export default useRWD;
