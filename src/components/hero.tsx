import { ReactNode } from "react";

interface HeroProps {
  text: string;
  ctaText: ReactNode;
  onClick: () => void;
}
export function Hero({ text, ctaText, onClick }: HeroProps) {
  return (
    <div>
      {text}
      <button onClick={onClick}>{ctaText}</button>
    </div>
  );
}
