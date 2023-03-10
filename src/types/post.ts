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
export interface CardProps {
  slug: string;
  title: string;
  publish_date: string;
  author: string;
  description: string;
  splash: string;
  alt: string;
  isNew?: string;
  isTrending?: string;
  tags?: string[];
  splash_credits: string;
}
export interface Data {
  [key: string]: {
    frontmatter: Frontmatter;
    posts: Post[];
  } & CardProps;
}

export type Langs = "it" | "en";

export type LabelLangs = {
  [key in Langs]: string;
};

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
