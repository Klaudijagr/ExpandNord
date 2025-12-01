import type React from 'react'
import { Suspense } from 'react'

interface LazyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export const LazyWrapper: React.FC<LazyWrapperProps> = ({
  children,
  fallback = <div className="animate-pulse bg-gray-200 rounded h-32 w-full" />,
}) => {
  return <Suspense fallback={fallback}>{children}</Suspense>
}
