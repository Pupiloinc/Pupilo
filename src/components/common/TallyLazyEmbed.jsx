"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Lazy-loads a Tally form iframe and shows a premium-looking loading state
 * until the form is ready. Designed to feel fast and delightful.
 */
export default function TallyLazyEmbed({
  src,
  title = "Form",
  height = 800,
  className = "",
}) {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [earlyFade, setEarlyFade] = useState(false);

  useEffect(() => {
    // Start subtle fade of overlay shortly after mount, then fully fade on load
    const t = setTimeout(() => setEarlyFade(true), 220);
    return () => clearTimeout(t);
  }, []);


  return (
    <div
      ref={containerRef}
      className={`relative rounded-2xl overflow-hidden border-2 border-purple/20 bg-white ${className}`}
      style={{ minHeight: height }}
      aria-busy={!loaded}
    >
      <div
        className="absolute inset-0 grid place-items-center bg-gradient-to-br from-purple/10 via-white to-blue-100"
        style={{ opacity: loaded ? 0 : (earlyFade ? 0.38 : 1), transition: "opacity .25s ease-out", pointerEvents: loaded ? "none" : "auto", willChange: "opacity", transform: "translateZ(0)" }}
      >
          {/* Shimmering animated border */}
          <div className="shimmer-border pointer-events-none" aria-hidden="true" />

          {/* Ambient glows */}
          <div className="pointer-events-none absolute -top-10 -left-10 w-52 h-52 bg-purple/20 blur-3xl rounded-full" />
          <div className="pointer-events-none absolute -bottom-12 -right-8 w-64 h-64 bg-blue-300/20 blur-3xl rounded-full" />

          {/* Visual loader only (no text) */}
          <div className="relative">
            <div className="h-14 w-14 rounded-full border-4 border-purple/30 border-t-purple" style={{ animation: "spin-fast 0.55s linear infinite" }} />
            <div className="absolute inset-0 animate-ping rounded-full bg-purple/20" />
          </div>

          {/* Subtle sheen pass */}
          <div className="shine pointer-events-none" aria-hidden="true" />
      </div>

      <iframe
        src={src}
        title={title}
        onLoad={() => setLoaded(true)}
        loading="eager"
        width="100%"
        height={height}
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        className="w-full"
        style={{ background: "transparent", minHeight: height, opacity: loaded ? 1 : 0, transition: "opacity .3s ease-out", willChange: "opacity", transform: "translateZ(0)" }}
        allow="fullscreen; clipboard-read; clipboard-write"
      />

      {/* Iframe starts immediately; no placeholder needed */}

      {/* Local component styles for advanced animations */}
      <style jsx>{`
        @keyframes rotate {
          to { transform: rotate(360deg); }
        }
        @keyframes spin-fast {
          to { transform: rotate(360deg); }
        }
        @keyframes sheen {
          0% { transform: translateX(-120%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(120%); }
        }
        .shimmer-border {
          position: absolute;
          inset: -2px;
          border-radius: 1rem; /* matches rounded-2xl */
          background: conic-gradient(from 0deg, rgba(124,58,237,0.55), rgba(37,99,235,0.55), rgba(124,58,237,0.55));
          animation: rotate 1.8s linear infinite;
          /* Create a border-only effect */
          padding: 2px;
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          filter: blur(8px);
        }
        .shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.35) 35%, rgba(255,255,255,0.55) 50%, transparent 65%);
          mix-blend-mode: overlay;
          animation: sheen 1.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
