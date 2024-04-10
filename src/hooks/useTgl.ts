import { useEffect, useState } from "react";
import getGainers, { TGLData, TGLFormData } from "../services/stockService";
import getTgl from "../services/stockService";

export function useTgl() {
  const [tgl, setTgl] = useState<TGLFormData[]>([]);
  useEffect(() => {
    async function fetch() {
      const { data: gainers } = await getTgl();
      setTgl(gainers);
    }
    fetch();
  }, []);
  return { tgl, setTgl };
}
