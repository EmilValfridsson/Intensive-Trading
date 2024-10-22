import { useEffect, useState } from "react";
import { getGainers } from "../services/stockService";
import { TGLFormData } from "../services/stockService";

export function useTopgainers() {
  const [topGainers, setTopGainers] = useState<TGLFormData[]>([]);

  useEffect(() => {
    async function fetch() {
      const { data: gainers } = await getGainers();
      setTopGainers(gainers);
    }
    fetch();
  }, []);
  return { topGainers, setTopGainers };
}
