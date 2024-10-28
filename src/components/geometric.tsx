"use client";

export function Circle({ top, left }: { top: string; left: string }) {
  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
        width: "40px",
        height: "40px",
        border: "3px solid #feb20f",
        borderRadius: "50%",
        backgroundColor: "white",
      }}
    ></div>
  );
}

export function Square({ top, left }: { top: string; left: string }) {
  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
        width: "40px",
        height: "40px",
        border: "3px solid #4caf50",
        backgroundColor: "white",
        borderRadius: "8px",
        transform: "rotate(15deg)",
      }}
    ></div>
  );
}

interface TriangleImageProps {
  top: string;
  left: string;
  width?: string;
  height?: string;
}

export const TriangleImage: React.FC<TriangleImageProps> = ({ top, left, width = "54px", height = "60px" }) => {
  return <img src="/triangle.svg" alt="Triangle" style={{ position: "absolute", top, left, width, height }} />;
};

// export default Triangle;

// export function Triangle({ top, left }: { top: string; left: string }) {
//   return (
//     <div
//       style={{
//         position: "absolute",
//         top: top,
//         left: left,
//         width: 0,
//         height: 0,
//         borderLeft: "30px solid transparent",
//         borderRight: "30px solid transparent",
//         borderBottom: "52px solid transparent", // 外边框透明填充
//         borderBottomColor: "#FF6B46", // 边框颜色
//         borderTop: "30px solid transparent", // 使边框呈现出空心效果
//       }}
//     ></div>
//   );
// }

// export function Triangle2({ top, left }: { top: string; left: string }) {
//   return (
//     <div
//       style={{
//         position: "absolute",
//         top: top,
//         left: left,
//         width: 0,
//         height: 0,
//         borderLeft: "26px solid transparent",
//         borderRight: "26px solid transparent",
//         borderBottom: "52px solid transparent", // 外边框透明填充
//         borderBottomColor: "white", // 边框颜色
//         borderTop: "26px solid transparent", // 使边框呈现出空心效果
//       }}
//     ></div>
//   );
// }

// import "../styles/global.css";

// export function HollowTriangles() {
//   return (
//     <div className="triangle-container">
//       <div className="triangle"></div>
//       <div className="triangle-2"></div>
//     </div>
//   );
// }

// export default HollowTriangle;

// type HollowTriangleProps = {
//   top: string;
//   left: string;
// };

// export function HollowTriangle({ top, left }: HollowTriangleProps) {
//   return <div style={{ ...styles.triangle, top, left }} />;
// }

// const styles = {
//   triangle: {
//     position: "absolute" as "absolute",
//     backgroundColor: "orange",
//     textAlign: "left" as "left",
//     width: "10em",
//     height: "10em",
//     borderTopRightRadius: "30%",
//     transform: "rotate(-60deg) skewX(-30deg) scale(1, .866)",
//     "::before": {
//       content: "''",
//       position: "absolute" as "absolute",
//       backgroundColor: "inherit",
//       width: "10em",
//       height: "10em",
//       borderTopRightRadius: "30%",
//       transform: "rotate(-135deg) skewX(-45deg) scale(1.414, .707) translate(0, -50%)",
//     },
//     "::after": {
//       content: "''",
//       position: "absolute" as "absolute",
//       backgroundColor: "inherit",
//       width: "10em",
//       height: "10em",
//       borderTopRightRadius: "30%",
//       transform: "rotate(135deg) skewY(-45deg) scale(.707, 1.414) translate(50%)",
//     },
//   },
// };
