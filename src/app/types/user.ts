export interface User {
  id: number;
  name: { firstname: string; lastname: string };
  phone: string;
  password: string;
  username: string;
  email: string;
  address: {
    city: string;
    number: number;
    street: string;
    zipcode: string;
    geolocation: { lat: string; long: string };
  };
}
