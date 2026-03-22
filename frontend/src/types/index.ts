export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  link: string | null;
  category: 'graphic' | 'video' | 'logo';
  year: number;
}

export interface Message {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  error: string | null;
}
