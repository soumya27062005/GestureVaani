import { cn } from "@/lib/utils";

interface AnimatedHandProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const AnimatedHand = ({ className, size = "md" }: AnimatedHandProps) => {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl"
  };

  return (
    <div className={cn(
      "inline-block animate-wave",
      sizeClasses[size],
      className
    )}>
      👋
    </div>
  );
};

interface GestureIconProps {
  gesture: string;
  className?: string;
  animated?: boolean;
}

export const GestureIcon = ({ 
  gesture, 
  className, 
  animated = false 
}: GestureIconProps) => {
  return (
    <span className={cn(
      "text-3xl",
      animated && "animate-float",
      className
    )}>
      {gesture}
    </span>
  );
};
