import React, { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  noGlow?: boolean;
}

const GlowCard = ({ children, noGlow = false }: GlowCardProps) => {
  const classes = noGlow
    ? ""
    : "glass p-6 shadow-lg transition hover:scale-[1.02] duration-200 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10";

  return <div className={classes}>{children}</div>;
};

export default GlowCard;
