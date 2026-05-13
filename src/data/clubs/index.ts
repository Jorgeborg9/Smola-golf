import { bleikClubData } from './bleik';
import { exampleClubData } from './example';
import { smolaClubData } from './smola';
import { vanylvenClubData } from './vanylven';

export type { GolfClubData } from './types';
export { bleikClubData, exampleClubData, smolaClubData, vanylvenClubData };

// New golf club demos can be created by copying `smola.ts` or `example.ts` and replacing the content.
export const availableClubData = {
  bleik: bleikClubData,
  smola: smolaClubData,
  example: exampleClubData,
  vanylven: vanylvenClubData,
} as const;

export type ClubSlug = keyof typeof availableClubData;

export const defaultGolfClubData = smolaClubData;

export function getClubSlugFromPath(pathname: string): ClubSlug | null {
  const match = pathname.match(/^\/golf\/([^/]+)\/?$/);
  if (!match) {
    return null;
  }

  const slug = match[1] as ClubSlug;
  return slug in availableClubData ? slug : null;
}

export function getClubDataForPath(pathname: string) {
  const slug = getClubSlugFromPath(pathname);
  return slug ? availableClubData[slug] : defaultGolfClubData;
}
