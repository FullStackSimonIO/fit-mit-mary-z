export type Course = {
  id: string;
  title: string;
  startDate: string; // YYYY-MM-DD
  time: string; // HH:MM
  endDate: string;
  price: string;
  description: string;
  imgUrl: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  currentCount: Number;
};
