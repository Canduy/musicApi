import { useEffect, useState } from "react";
import { home } from "../apiServices/homeServices";
import Context from "./context";

export default function Provider({ children }) {
  const [top, setTop] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const respon = await home();
      setTop(respon);
    };
    fetchApi();
  }, []);
  const store = {
    top,
  };
  return <Context.Provider value={store}>{children}</Context.Provider>;
}
