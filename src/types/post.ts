import type { Component } from "@builder.io/qwik";

export interface Data {
  [key: string]: {
    frontmatter: Component<{}>;
    posts: Post[];
    slug: string;
    title: string;
  }
}

export type langs = "it" | "en";
export interface Post {
  id: number;
  title: string;
  description: { [key in langs]: string };
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
