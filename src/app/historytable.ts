export interface HistoryTable {
  city: string;
  numberofslots: number;
  totalrs: number;
  active: boolean;
  imagepath: string;
}
export const HISTORY_LIST: HistoryTable[] = [
  { city: 'Phoenix', numberofslots: 23, totalrs: 150, active: false, imagepath: 'Park8.jpg' },
  { city: 'Lalbagh', numberofslots: 7, totalrs: 50, active: false, imagepath: 'Park4.jpg' },
];
