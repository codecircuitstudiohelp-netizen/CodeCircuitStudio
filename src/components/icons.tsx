import type { SVGProps } from 'react';
import { Ghost } from 'lucide-react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M14.5 2.5a10 10 0 0 1 7 12" stroke="url(#logo-gradient)" />
      <path d="M9.5 21.5a10 10 0 0 1-7-12" stroke="url(#logo-gradient)" />
      <path d="M2.5 9.5A10 10 0 0 0 12 2a10 10 0 0 0 10 9.5" stroke="url(#logo-gradient)" opacity="0.5" />
      <circle cx="14.5" cy="2.5" r="1.5" fill="hsl(var(--primary))" />
      <circle cx="21.5" cy="14.5" r="1.5" fill="hsl(var(--accent))" />
      <circle cx="9.5" cy="21.5" r="1.5" fill="hsl(var(--primary))" />
      <circle cx="2.5" cy="9.5" r="1.5" fill="hsl(var(--accent))" />
      <path d="m12 8 1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5 1.5-3z" fill="hsl(var(--primary))" />
    </svg>
  );
}

export function Google(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.19,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2.18 12.19,2.18C6.42,2.18 2.03,6.8 2.03,12C2.03,17.05 6.16,21.82 12.2,21.82C17.6,21.82 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1Z" />
    </svg>
  );
}
