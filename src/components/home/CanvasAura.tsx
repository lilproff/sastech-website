import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export default function CanvasAura() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let time = 0;
    let animId: number;
    
    // Mouse interaction state
    const mouse = { x: 0, y: 0, active: false };
    const targetMouse = { x: 0, y: 0 };

    function resize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect();
      const w = rect?.width ?? window.innerWidth;
      const h = rect?.height ?? window.innerHeight;
      
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx?.scale(dpr, dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    }

    function handleMouseMove(e: MouseEvent) {
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
      mouse.active = true;
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();

    function animate() {
      if (!ctx || !canvas) return;
      time += 0.003;
      
      const isDark = document.documentElement.classList.contains('dark');
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      // Smoothly interpolate mouse
      mouse.x += (targetMouse.x - mouse.x) * 0.04;
      mouse.y += (targetMouse.y - mouse.y) * 0.04;

      ctx.clearRect(0, 0, w, h);
      
      // Better blending for different themes
      ctx.globalCompositeOperation = isDark ? 'screen' : 'multiply';
      
      const count = 12;
      for (let i = 0; i < count; i++) {
        const normalizedX = i / count;
        
        // Mouse perturbation
        const distToMouse = Math.abs(normalizedX * w - mouse.x);
        const mouseEffect = Math.max(0, 1 - distToMouse / (w * 0.4));
        const xOffset = mouse.active ? mouseEffect * (mouse.x - normalizedX * w) * 0.4 : 0;

        const xPos =
          normalizedX * w +
          Math.sin(time * 1.5 + i) * (w * 0.08) + 
          xOffset;

        const foldWidth = (w / count) * 3;
        const waveIntensity = (Math.sin(time * 1.5 + i * 0.3) + 1) * 0.5;
        const grad = ctx.createLinearGradient(0, 0, 0, h);
        
        const opacityMult = isDark ? 0.2 : 0.12;
        const color = isDark ? '0, 180, 200' : '0, 180, 200';
        
        grad.addColorStop(0, `rgba(${color}, 0)`);
        grad.addColorStop(0.5, `rgba(${color}, ${waveIntensity * opacityMult})`);
        grad.addColorStop(1, `rgba(${color}, ${waveIntensity * opacityMult * 1.8})`);
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(xPos - foldWidth, 0);
        ctx.bezierCurveTo(
          xPos,
          h * 0.4,
          xPos - foldWidth,
          h * 0.6,
          xPos + foldWidth,
          h
        );
        ctx.lineTo(xPos + foldWidth * 2, h);
        ctx.bezierCurveTo(
          xPos + foldWidth,
          h * 0.6,
          xPos + foldWidth * 2,
          h * 0.4,
          xPos + foldWidth,
          0
        );
        ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';
      animId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80 transition-opacity duration-1000"
    />
  );
}
