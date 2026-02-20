"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on pointer-fine devices
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const setX = gsap.quickSetter(cursor, "x", "px");
    const setY = gsap.quickSetter(cursor, "y", "px");

    let mouseX = 0;
    let mouseY = 0;
    let curX = 0;
    let curY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseEnterInteractive = () => {
      cursor.classList.add("custom-cursor--expanded");
    };

    const onMouseLeaveInteractive = () => {
      cursor.classList.remove("custom-cursor--expanded");
    };

    window.addEventListener("mousemove", onMouseMove);

    // Attach to interactive elements
    const bindInteractive = () => {
      document
        .querySelectorAll("a, button, [data-cursor]")
        .forEach((el) => {
          el.addEventListener("mouseenter", onMouseEnterInteractive);
          el.addEventListener("mouseleave", onMouseLeaveInteractive);
        });
    };

    bindInteractive();

    // Observe DOM changes to rebind new interactive elements
    const observer = new MutationObserver(bindInteractive);
    observer.observe(document.body, { childList: true, subtree: true });

    // Animate cursor with lerp
    const ticker = gsap.ticker.add(() => {
      curX += (mouseX - curX) * 0.15;
      curY += (mouseY - curY) * 0.15;
      setX(curX);
      setY(curY);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      gsap.ticker.remove(ticker as unknown as gsap.TickerCallback);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{ left: 0, top: 0, transform: "translate(-50%, -50%)" }}
    />
  );
}
