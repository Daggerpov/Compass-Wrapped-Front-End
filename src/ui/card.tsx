import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className = '', children }: CardProps) {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = '', children }: CardProps) {
  return (
    <div className={`p-6 pt-0 ${className}`}>{children}</div>
  );
} 