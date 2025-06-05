export interface FormData {
  name: string;
  age: number | string;
  email: string;
  interest: string[];
  theme: 'light' | 'dark';
}

export interface FormErrors {
  name?: string;
  age?: string;
  email?: string;
  interest?: string;
}
