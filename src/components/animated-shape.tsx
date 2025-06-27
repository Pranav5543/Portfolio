'use client'

export function AnimatedShape() {
  return (
    <div className="relative flex h-full w-full items-center justify-center perspective">
      <div className="absolute h-4/5 w-4/5 animate-spin-3d preserve-3d">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent opacity-50"></div>
        <div className="absolute inset-0 rotate-[60deg] rounded-full border-2 border-dashed border-accent opacity-50"></div>
        <div className="absolute inset-0 rotate-[120deg] rounded-full border-2 border-dashed border-accent opacity-50"></div>
        <div className="absolute flex h-full w-full items-center justify-center">
            <div className="h-1/3 w-1/3 rounded-full bg-accent/20 backdrop-blur-sm"></div>
        </div>
      </div>
    </div>
  )
}
