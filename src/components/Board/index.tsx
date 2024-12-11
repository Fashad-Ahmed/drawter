import { memo, useRef } from "react";

const Board = () => {
  const canvasRef = useRef(null);

  return <canvas ref={canvasRef}></canvas>;
};

export default memo(Board);
