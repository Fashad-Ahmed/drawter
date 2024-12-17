import { memo, useEffect, useRef } from "react";

import { useActionMenuItem, useActiveMenuItem } from "@/store/menuStore";
import { useToolboxStore } from "@/store/toolBoxStore";
import { getBrushTool } from "@/utils/helpers";
import { BrushTool } from "@/utils/types/toolBox.type";

const Board = () => {
  const canvasRef = useRef(null);
  const shouldDraw = useRef<boolean>(false);

  const activeMenuItem = useActiveMenuItem();
  const actionMenuItem = useActionMenuItem();

  const { color, size: brushSize } = useToolboxStore((state) => {
    const item = state[activeMenuItem] as BrushTool;
    return item;
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.strokeStyle = color;
    context.lineWidth = brushSize;

    const changeConfig = (color: string, size: number) => {
      context.strokeStyle = color;
      context.lineWidth = size;
    };

    changeConfig(color, brushSize);
  }, [color, brushSize]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const beginPath = (x, y) => {
      context.beginPath();
      context.moveTo(x, y);
    };

    const drawLine = (x, y) => {
      context.lineTo(x, y);
      context.stroke();
    };

    const handleMouseDown = (e) => {
      shouldDraw.current = true;
      // beginPath(
      //   context,
      //   e.clientX || e?.touches?.[0].clientX,
      //   e.clientY || e?.touches?.[0].clientY
      // );
    };

    const handleMouseMove = (e) => {
      if (!shouldDraw.current) return;

      // drawLine(
      //   context,
      //   e.clientX || e?.touches?.[0].clientX,
      //   e.clientY || e?.touches?.[0].clientY
      // );
    };

    const handleMouseUp = (e) => {
      shouldDraw.current = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.addEventListener("mousedown", handleMouseDown);
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default memo(Board);
