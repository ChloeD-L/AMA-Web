// import { Point } from "./interfaces";
// import Particle from "./Particle";

// class TriangleParticle extends Particle {
//   public x: number;
//   public y: number;
//   public static BASE_LENGTH = 50;

//   constructor(x: number, y: number) {
//     // 只接受 x 和 y
//     super();
//     this.x = x;
//     this.y = y;
//   }

//   public static get side() {
//     return (this.BASE_LENGTH / Math.sqrt(3)) * 2;
//   }

//   // 新增 render 方法，包装 drawParticle
//   public render(ctx: CanvasRenderingContext2D, scale: number = 1): void {
//     this.drawParticle(ctx, scale);
//   }

//   protected drawParticle(ctx: CanvasRenderingContext2D, scale: number = 1): void {
//     const { x, y } = this.center;

//     const topPoint = {
//       x,
//       y: y - (TriangleParticle.BASE_LENGTH * scale * 2) / 3,
//     };

//     const verticies = [
//       topPoint,
//       {
//         x: topPoint.x - (TriangleParticle.side * scale) / 2,
//         y: topPoint.y + TriangleParticle.BASE_LENGTH * scale,
//       },
//       {
//         x: topPoint.x + (TriangleParticle.side * scale) / 2,
//         y: topPoint.y + TriangleParticle.BASE_LENGTH * scale,
//       },
//     ];

//     ctx.beginPath();
//     ctx.moveTo(verticies[0].x, verticies[0].y);
//     ctx.lineTo(verticies[1].x, verticies[1].y);
//     ctx.lineTo(verticies[2].x, verticies[2].y);
//     ctx.closePath();
//     ctx.stroke();
//   }

//   protected get center(): Point {
//     return { x: this.x, y: this.y + (TriangleParticle.BASE_LENGTH * 2) / 3 };
//   }

//   protected get verticies(): Point[] {
//     const { x, y } = this;
//     const side = TriangleParticle.side;

//     return [
//       { x, y },
//       { x: x + side / 2, y: y + TriangleParticle.BASE_LENGTH },
//       { x: x - side / 2, y: y + TriangleParticle.BASE_LENGTH },
//     ];
//   }
// }

// export default TriangleParticle;
