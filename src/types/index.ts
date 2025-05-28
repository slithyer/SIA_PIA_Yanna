export type NavLink = {
  name: string;
  href: string;
};

export type WorkExperience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  status: 'completed' | 'in-progress' | 'planned';
  link?: string;
};

export type Interest = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

export type TimelineEvent = {
  id: string;
  year: string;
  title: string;
  description: string;
  imageUrl?: string;
};

export type PersonalInfo = {
  name: string;
  title: string;
  location: string;
  email: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  bio: string;
  profileImage: string;
};