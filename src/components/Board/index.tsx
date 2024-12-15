import { memo, useEffect, useRef } from "react";

import { useActionMenuItem, useActiveMenuItem } from "@/store/menuStore";
import { useChangeBrushSize, useChangeColor } from "@/store/toolBoxStore";

const Board = () => {
  const canvasRef = useRef(null);

  const activeMenuItem = useActiveMenuItem();
  const actionMenuItem = useActionMenuItem();
  const color = useChangeColor(activeMenuItem);
  const brushSize = useChangeBrushSize(activeMenuItem);

  const changeConfig = (color: string, size: number, context: any) => {
    context.strokeStyle = color;
    context.lineWidth = size;
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
  }, [color, brushSize]);

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
