'use client'

/**
 * @author: @emerald-ui
 * @description: An animated button with a shimmer gradient effect that moves across the surface
 * @version: 1.0.0
 * @date: 2026-02-11
 * @license: MIT
 * @website: https://emerald-ui.com
 */
import { clsx } from 'clsx'
import type { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
}

export default function ShimmerButton({
  children = 'Shimmer',
  className,
  style,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-[linear-gradient(110deg,#fff,45%,#f1f1f1,55%,#fff)] px-6 font-medium text-slate-600 transition-colors focus:outline-none focus-visible:ring-2 focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-slate-400 dark:border-slate-800 dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] dark:text-slate-400 dark:focus:ring-slate-300',
        className
      )}
      style={{
        backgroundSize: '200% 100%',
        backgroundPosition: '0% 0%',
        animation: 'shimmer2 2s infinite linear',
        willChange: 'background-position',
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  )
}
