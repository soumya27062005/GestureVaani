import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconColor?: string;
}

export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className,
  iconColor = "text-primary" 
}: FeatureCardProps) => {
  return (
    <Card className={cn(
      "group hover:shadow-medium transition-all duration-300 hover:scale-105 border-border/50 bg-card/80 backdrop-blur-sm", 
      className
    )}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className={cn("h-8 w-8", iconColor)} />
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};
