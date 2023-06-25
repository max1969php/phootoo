import { useState } from "react";

export default function useToggleVid() {
  const [onVid, setOnVid] = useState(false);

  const togglerVid = () => {
    setOnVid((on) => !onVid);
  };

  return { onVid, togglerVid };
}