import type { CollectionEntry } from "astro:content";

export type Blog = CollectionEntry<"blog">;
export type Note = CollectionEntry<"notes">;
export type Link = CollectionEntry<"links">;
export type Project = CollectionEntry<"projects">;
export type Experience = CollectionEntry<"experience">;
export type Education = CollectionEntry<"education">;
