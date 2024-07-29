"use client";

import React, { useEffect, useRef } from 'react';

const BouncingBallsSecond: React.FC = () => {
  const ball1Ref = useRef<HTMLDivElement>(null);
  const ball2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ball1 = ball1Ref.current;
    const ball2 = ball2Ref.current;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const ballRadius = 32; // 球的半径
    const initialBall1Pos = { x: 0, y: 0 }; // 初始位置左上角
    const initialBall2Pos = { x: 1000, y: 1000 }; // 初始位置右下角
    const ball1Velocity = { x: 2, y: 2 };
    const ball2Velocity = { x: -2, y: -2 };

    const ball1Pos = { ...initialBall1Pos };
    const ball2Pos = { ...initialBall2Pos };

    const updatePositions = () => {
      if (ball1 && ball2) {
        // 更新球的位置
        ball1Pos.x += ball1Velocity.x;
        ball1Pos.y += ball1Velocity.y;
        ball2Pos.x += ball2Velocity.x;
        ball2Pos.y += ball2Velocity.y;

        // 检查与墙壁的碰撞并反转速度
        if (ball1Pos.x <= 0 || ball1Pos.x >= screenWidth - ballRadius * 2) {
          ball1Velocity.x *= -1;
        }
        if (ball1Pos.y <= 0 || ball1Pos.y >= screenHeight - ballRadius * 2) {
          ball1Velocity.y *= -1;
        }
        if (ball2Pos.x <= 0 || ball2Pos.x >= screenWidth - ballRadius * 2) {
          ball2Velocity.x *= -1;
        }
        if (ball2Pos.y <= 0 || ball2Pos.y >= screenHeight - ballRadius * 2) {
          ball2Velocity.y *= -1;
        }

        // 检查球与球之间的碰撞
        const dx = ball1Pos.x - ball2Pos.x;
        const dy = ball1Pos.y - ball2Pos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < ballRadius * 2) {
          // 反转速度
          ball1Velocity.x *= -1;
          ball1Velocity.y *= -1;
          ball2Velocity.x *= -1;
          ball2Velocity.y *= -1;

          // 调整位置以防止重叠
          const overlap = ballRadius * 2 - distance;
          const halfOverlap = overlap / 2;
          const angle = Math.atan2(dy, dx);
          ball1Pos.x += Math.cos(angle) * halfOverlap;
          ball1Pos.y += Math.sin(angle) * halfOverlap;
          ball2Pos.x -= Math.cos(angle) * halfOverlap;
          ball2Pos.y -= Math.sin(angle) * halfOverlap;
        }

        // 更新球在 DOM 中的位置
        ball1.style.transform = `translate(${ball1Pos.x}px, ${ball1Pos.y}px)`;
        ball2.style.transform = `translate(${ball2Pos.x}px, ${ball2Pos.y}px)`;

        // 继续下一帧的更新
        requestAnimationFrame(updatePositions);
      }
    };

    // 开始动画
    updatePositions();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      <div
        ref={ball1Ref}
        className="absolute w-16 h-16 bg-blue-500 rounded-full"
        style={{ transform: 'translate(0, 0)' }}
      ></div>
      <div
        ref={ball2Ref}
        className="absolute w-16 h-16 bg-red-500 rounded-full"
        style={{ transform: `translate(${window.innerWidth - 64}px, ${window.innerHeight - 64}px)` }}
      ></div>
    </div>
  );
};

export default BouncingBallsSecond;
