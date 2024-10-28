// "use client";

// import React, { useRef, useEffect } from "react";
// import TriangleParticle from "./TriangleParticle";

// interface TriangleProps {
//   top: string;
//   left: string;
// }

// const Triangle: React.FC<TriangleProps> = ({ top, left }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (canvas) {
//       const ctx = canvas.getContext("2d");
//       if (ctx) {
//         const triangle = new TriangleParticle(canvas.width / 2, canvas.height / 2);
//         triangle.render(ctx); // 使用 render 方法而不是 drawParticle
//       }
//     }
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       width={40}
//       height={40}
//       style={{
//         position: "absolute",
//         top,
//         left,
//       }}
//     />
//   );
// };

// export default Triangle;
