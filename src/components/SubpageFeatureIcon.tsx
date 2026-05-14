import type { SubpageFeatureIcon as SubpageFeatureIconType } from '../data/clubs/subpageTypes';

export function SubpageFeatureIcon({ icon }: { icon: SubpageFeatureIconType }) {
  if (icon === 'course') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 20V5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="m7 6 8 2.2-3 3.1 3 3.2L7 17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 20h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === 'access') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.5" y="6" width="15" height="12" rx="2.4" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 10h8M8 14h4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="16.5" cy="14" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="10" r="2.1" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="15.5" cy="9" r="2.1" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5.8 17.8c.6-2 2.2-3.3 4.1-3.3 2 0 3.6 1.2 4.2 3.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M12.6 17.6c.5-1.7 1.9-2.8 3.6-2.8 1.4 0 2.6.8 3.2 2.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
