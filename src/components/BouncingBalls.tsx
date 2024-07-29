"use client";

import React, { useEffect, useRef } from 'react';

const BouncingBalls: React.FC = () => {
  const ball1Ref = useRef<HTMLDivElement>(null);
  const ball2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ball1 = ball1Ref.current;
    const ball2 = ball2Ref.current;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const ballRadius = 50; // 球的半径
    const centerX = screenWidth / 2 - ballRadius;
    const centerY = screenHeight / 2 - ballRadius;

    const ball1StartPos = { x: 0, y: 0 }; // 初始位置左上角
    const ball2StartPos = { x: screenWidth - ballRadius * 2, y: screenHeight - ballRadius * 2 }; // 初始位置右下角

    // 三分之二位置
    const ball1TwoThirdsPos = {
      x: ball1StartPos.x + (centerX - ball1StartPos.x) * 2 / 3,
      y: ball1StartPos.y + (centerY - ball1StartPos.y) * 2 / 3,
    };
    const ball2TwoThirdsPos = {
      x: ball2StartPos.x + (centerX - ball2StartPos.x) * 2 / 3,
      y: ball2StartPos.y + (centerY - ball2StartPos.y) * 2 / 3,
    };

    //镜像位置
    const ball1MirrorPos1 = {
      x: ball1StartPos.x + (centerX - ball1StartPos.x) * 2 / 3,
      y: 2 * centerY - (ball1StartPos.y + (centerY - ball1StartPos.y) * 2 / 3 ),
    };

    const ball1MirrorPos2 = {
      x: ball2StartPos.x + (centerX - ball2StartPos.x) * 2 / 3,
      y: 2 * centerY - (ball2StartPos.y + (centerY - ball2StartPos.y) * 2 / 3),
    };

    const duration = 4000; // 每个动画阶段的持续时间 (毫秒)

    const animateBalls = () => {
      if (ball1 && ball2) {
        const keyframes1 = [
          { transform: `translate(${ball1TwoThirdsPos.x}px, ${ball1TwoThirdsPos.y}px)` },
          { transform: `translate(${centerX}px, ${centerY}px)` },
          { transform: `translate(${ball1TwoThirdsPos.x}px, ${ball1TwoThirdsPos.y}px)` },
          { transform: `translate(${ball1TwoThirdsPos.x}px, ${ball1MirrorPos1.y}px)` },
          { transform: `translate(${centerX}px, ${centerY}px)` },
          { transform: `translate(${ball1TwoThirdsPos.x}px, ${ball1MirrorPos1.y}px)` },
          { transform: `translate(${ball1TwoThirdsPos.x}px, ${ball1TwoThirdsPos.y}px)` },
          // { transform: `translate(${centerX + 400}px, ${centerY - 400}px)` },
          // { transform: `translate(${centerX + 200}px, ${centerY - 200}px)` },
          // { transform: `translate(${centerX - 200}px, ${centerY - 200}px)` },
          // { transform: `translate(${centerX}px, ${centerY}px)` },
          // { transform: `translate(${ball1TwoThirdsPos.x}px, ${ball1TwoThirdsPos.y}px)` },
        ];

        const keyframes2 = [
          { transform: `translate(${ball2TwoThirdsPos.x}px, ${ball2TwoThirdsPos.y}px)` },
          { transform: `translate(${centerX}px, ${centerY}px)` },
          { transform: `translate(${ball2TwoThirdsPos.x}px, ${ball2TwoThirdsPos.y}px)` },
          { transform: `translate(${ball2TwoThirdsPos.x}px, ${ball1MirrorPos2.y}px)` },
          { transform: `translate(${centerX}px, ${centerY}px)` },
          { transform: `translate(${ball2TwoThirdsPos.x}px, ${ball1MirrorPos2.y}px)` },
          { transform: `translate(${ball2TwoThirdsPos.x}px, ${ball2TwoThirdsPos.y}px)` },
          // { transform: `translate(${centerX + 400}px, ${centerY - 400}px)` },
          // { transform: `translate(${centerX + 200}px, ${centerY - 200}px)` },
          // { transform: `translate(${centerX - 200}px, ${centerY - 200}px)` },
          // { transform: `translate(${centerX + 200}px, ${centerY - 200}px)` },
          // { transform: `translate(${centerX}px, ${centerY}px)` },
          // { transform: `translate(${ball2TwoThirdsPos.x}px, ${ball2TwoThirdsPos.y}px)` },
        ];

        const options = {
          duration: duration * 2, // 总持续时间
          iterations: Infinity, // 无限次重复
          // easing: 'ease-in-out', // 使用缓入缓出效果
        };

        ball1.animate(keyframes1, options);
        ball2.animate(keyframes2, options);
      }
    };

    animateBalls();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      <div
        ref={ball1Ref}
        className="absolute w-16 h-16 bg-blue-500 rounded-full blur-xl"
        style={{ transform: 'translate(0, 0)' }}
      ></div>
      <div
        ref={ball2Ref}
        className="absolute w-16 h-16 bg-red-500 rounded-full blur-xl"
        style={{ transform: `translate(${window.innerWidth - 64}px, ${window.innerHeight - 64}px)` }}
      ></div>
    </div>
  );
};

export default BouncingBalls;
