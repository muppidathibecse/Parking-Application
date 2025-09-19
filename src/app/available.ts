export interface Available {
  city: string;
  numberofslots: number;
  rs: number;
  imagepath: string;
}
export const AVAILABLE_LIST: Available[] = [
  { city: 'Whitefield', numberofslots: 0, rs: 150, imagepath: 'Park2.jpg' },
  { city: 'Electronic City', numberofslots: 10, rs: 150, imagepath: 'Park1.jpg' },
  { city: 'Indiranagar', numberofslots: 5, rs: 150, imagepath: 'Park3.jpg' },
  { city: 'Lalbagh garden', numberofslots: 0, rs: 250, imagepath: 'Park4.jpg' },
  { city: 'INOX Cinemas', numberofslots: 23, rs: 150, imagepath: 'Park5.webp' },
  { city: 'PVR VR', numberofslots: 0, rs: 250, imagepath: 'Park6.jpg' },
  { city: 'Jayanagar', numberofslots: 7, rs: 50, imagepath: 'Park7.webp' },
  { city: 'Phoenix', numberofslots: 1, rs: 70, imagepath: 'Park8.jpg' },
];
