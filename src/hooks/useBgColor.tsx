import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";

export const useBgColor = () => {
  const router = usePathname();

  const bgColor = useMemo(() => {
    return router === "/" ? "lightblue" : "beige";
  },[router])

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
}