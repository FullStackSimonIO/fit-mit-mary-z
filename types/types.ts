export type User = {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  currentCount: Number;
};

export interface Course {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  time: string;
  price: string;
  imgUrl: string;
}

// You can add more types here as needed for your application
