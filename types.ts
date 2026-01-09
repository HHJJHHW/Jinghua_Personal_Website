
export interface Project {
  id: string;
  title: string;
  description: string[];
  coverImage: string;
  images: string[];
  tags: string[];
  githubUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  achievements: string[];
  logo?: string;
}

export interface Photo {
  url: string;
  caption: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  logo: string;
  url?: string;
}
