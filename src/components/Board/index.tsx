import { memo, useEffect, useRef } from "react";

import { useActionMenuItem, useActiveMenuItem } from "@/store/menuStore";
import { useChangeBrushSize, useChangeColor } from "@/store/toolBoxStore";

const Board = () => {
  const canvasRef = useRef(null);

  const activeMenuItem = useActiveMenuItem();
  const actionMenuItem = useActionMenuItem();
  const color = useChangeColor(activeMenuItem);
  const brushSize = useChangeBrushSize(activeMenuItem);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    console.log("🚀 ~ useEffect ~ context:", context);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default memo(Board);
