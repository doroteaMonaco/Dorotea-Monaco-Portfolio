import { useEffect, useState } from "react";

interface StatCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export const StatCounter = ({ end, duration = 2000, suffix = "", prefix = "" }: StatCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
};

interface StatsProps {
  stats: Array<{
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
    icon?: string;
  }>;
}

export const Stats = ({ stats }: StatsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="glass-floating rounded-2xl p-6 text-center hover-glow"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {stat.icon && (
            <div className="text-3xl mb-2">{stat.icon}</div>
          )}
          <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
            <StatCounter 
              end={stat.value} 
              suffix={stat.suffix || ""} 
              prefix={stat.prefix || ""}
            />
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};
