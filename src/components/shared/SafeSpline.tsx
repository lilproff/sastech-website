import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import ErrorBoundary from './ErrorBoundary';

interface SafeSplineProps {
  scene: string;
  className?: string;
  fallback?: React.ReactNode;
}

export default function SafeSpline({ scene, className, fallback }: SafeSplineProps) {
  const [isLoading, setIsLoading] = useState(true);

  const defaultFallback = (
    <div className={`relative flex items-center justify-center bg-white/[0.02] rounded-[48px] border border-white/5 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#38bdf8]/10 via-transparent to-[#2dd4bf]/10 animate-pulse" />
      <div className="relative z-10 text-center px-6">
        <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
           <div className="w-4 h-4 rounded-full bg-[#38bdf8] animate-ping" />
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Initialising 3D Module...</p>
      </div>
    </div>
  );

  return (
    <ErrorBoundary fallback={fallback || defaultFallback}>
      <div className={`relative ${className}`}>
        {isLoading && (fallback || defaultFallback)}
        <Spline 
          scene={scene} 
          onLoad={() => setIsLoading(false)}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}
        />
      </div>
    </ErrorBoundary>
  );
}
