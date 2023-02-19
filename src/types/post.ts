export interface IndexData {
  title: string;
  description: string;
}

export interface Frontmatter {
  title: string;
  username: string;
  subtitle: string;
  published_at: string;
}
export interface Data {
  [key: string]: {
    frontmatter: Frontmatter;
    posts: Post[];
    slug: string;
    title: string;
    description: string;
  };
}

export type Langs = "it" | "en";
export type LocalizedData = {
  [key in Langs]: Data;
};

export interface Post {
  id: number;
  title: string;
  // description: { [key in langs]: string };
  description: string;
  specification: string;
  author: string;
  slug: string;
  image: string;
  avatar: string;
  cta: string;
  motto: string;
  created_at: string;
  pros: string[];
  cons: string[];
  review: string;
  stars: number;
  tags: string[];
  isNew: boolean;
}
