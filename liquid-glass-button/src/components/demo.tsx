import { LiquidButton } from "@/components/ui/liquid-glass-button";

export default function DemoOne() {
  return (
    <div className="relative flex h-52 w-full max-w-3xl items-center justify-center rounded-2xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-md">
      <LiquidButton className="z-10">
        Liquid Glass
      </LiquidButton> 
    </div>
  )
}
