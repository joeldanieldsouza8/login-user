export interface Productivity {
  Monday: number;
  Tuesday: number;
  Wednesday: number;
  Thursday: number;
  Friday: number;
  Saturday: number;
}

export interface User {
  empId: number;
  name: string;
  email: string;
  password: string;
  dob: string;
  role: string;
  productivity: Productivity; // Make sure this matches your JSON structure
}
