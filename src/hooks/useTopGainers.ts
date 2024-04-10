import { useEffect, useState } from "react";
import { TGLFormData } from "../services/stockService";
import getTgl from "../services/stockService";

export function useTopgainers() {
  const [topGainers, setTopGainers] = useState<TGLFormData[]>([]);
  useEffect(() => {
    async function fetch() {
      const { data: gainers } = await getTgl();
      setTopGainers(gainers);
    }
    fetch();
  }, []);
  return { topGainers, setTopGainers };
}
