export interface ProjectImage {
  src: string;
  caption?: string;
}

export interface Project {
  title: string;
  loc: string;
  cat: string;
  status: "Completed" | "Ongoing" | "Upcoming";
  year?: string;
  note?: string;

  description?: string;
  highlights?: string[];

  gallery: ProjectImage[];
}