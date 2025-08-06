import React, { useEffect, useRef } from 'react';
import { useDarkMode } from '@/hooks';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

const FloatingParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const darkMode = useDarkMode();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置画布大小
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 生成随机颜色
    const getRandomColor = (): string => {
      const colors = [
        '#ff6b6b', // 红色
        '#4ecdc4', // 青绿色
        '#45b7d1', // 蓝色
        '#96ceb4', // 绿色
        '#ffeaa7', // 黄色
        '#dda0dd', // 紫色
        '#98d8c8', // 薄荷绿
        '#f7dc6f', // 金黄色
        '#bb8fce', // 淡紫色
        '#85c1e9', // 天蓝色
        '#f8c471', // 橙色
        '#82e0aa', // 浅绿色
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // 创建粒子
    const createParticle = (): Particle => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: 0,
        maxLife: Math.random() * 300 + 200, // 200-500帧的生命周期
        size: Math.random() * 2 + 1, // 1-3px的大小
        color: getRandomColor(),
      };
    };

    // 初始化粒子
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 50; i++) {
        particlesRef.current.push(createParticle());
      }
    };

    // 更新粒子
    const updateParticles = () => {
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // 如果粒子超出边界或生命周期结束，重新生成
        if (
          particle.life >= particle.maxLife ||
          particle.x < 0 ||
          particle.x > canvas.width ||
          particle.y < 0 ||
          particle.y > canvas.height
        ) {
          particlesRef.current[index] = createParticle();
        }
      });
    };

    // 绘制粒子
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        const opacity = Math.max(0, 1 - particle.life / particle.maxLife);
        
        ctx.save();
        ctx.globalAlpha = opacity * (darkMode ? 0.7 : 0.8);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = darkMode ? 10 : 6;
        ctx.shadowColor = particle.color;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    };

    // 动画循环
    const animate = () => {
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default FloatingParticles;
