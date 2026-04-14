"use client";

import { useRef, useState } from "react";
import { motion, useSpring, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export default function MagneticButton({
  children,
  className,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);

  // Use springs for butter-smooth snap back 
  const xParams = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const yParams = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    // Limit maximum magnetic pull distance
    xParams.set(x * 0.2);
    yParams.set(y * 0.2);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    xParams.set(0);
    yParams.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        x: xParams,
        y: yParams,
      }}
      className={cn(
        "relative transition-colors",
        className
      )}
      {...props}
    >
      {/* Optional: we can add an underglow when hovered if required, for now just magnetic pull */}
      <motion.div
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="flex items-center justify-center w-full h-full"
      >
        {children}
      </motion.div>
    </motion.button>
  );
}
