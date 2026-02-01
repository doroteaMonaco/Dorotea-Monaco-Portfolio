import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

// Project Card Skeleton
export function ProjectCardSkeleton() {
  return (
    <div className="glass-floating rounded-2xl overflow-hidden">
      <Skeleton className="aspect-[16/10] w-full" />
      <div className="p-6 space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-16" />
        </div>
      </div>
    </div>
  );
}

// Skill Card Skeleton
export function SkillCardSkeleton() {
  return (
    <div className="glass-floating rounded-xl p-6">
      <Skeleton className="w-12 h-12 rounded-full mx-auto mb-4" />
      <Skeleton className="h-5 w-24 mx-auto mb-3" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mx-auto" />
    </div>
  );
}

// Timeline Item Skeleton
export function TimelineItemSkeleton() {
  return (
    <div className="glass-floating rounded-2xl p-6 space-y-3">
      <div className="flex items-start gap-3">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
      <Skeleton className="h-16 w-full" />
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-20" />
      </div>
    </div>
  );
}

// Blog Post Skeleton
export function BlogPostSkeleton() {
  return (
    <div className="glass-floating rounded-2xl p-6 space-y-4">
      <Skeleton className="h-48 w-full rounded-lg" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="flex gap-2 items-center">
        <Skeleton className="w-8 h-8 rounded-full" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  );
}

// Stats Counter Skeleton
export function StatsCounterSkeleton() {
  return (
    <div className="glass-floating rounded-2xl p-6 text-center space-y-2">
      <Skeleton className="h-8 w-16 mx-auto" />
      <Skeleton className="h-4 w-24 mx-auto" />
    </div>
  );
}

export { Skeleton }
