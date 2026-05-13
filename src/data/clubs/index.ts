import { exampleClubData } from './example';
import { smolaClubData } from './smola';
import { vanylvenClubData } from './vanylven';

export type { GolfClubData } from './types';
export { exampleClubData, smolaClubData, vanylvenClubData };

// New golf club demos can be created by copying `smola.ts` or `example.ts` and replacing the content.
export const availableClubData = {
  smola: smolaClubData,
  example: exampleClubData,
  vanylven: vanylvenClubData,
} as const;

// Change this export when you want to preview a different club in the app.
export const defaultGolfClubData = vanylvenClubData;
