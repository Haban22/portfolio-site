import type { CollectionEntry } from 'astro:content';

export type ContentItem =
    | CollectionEntry<'blog'>
    | CollectionEntry<'notes'>
    | CollectionEntry<'links'>
    | CollectionEntry<'projects'>;

export function sortContentByDate(content: ContentItem[]): ContentItem[] {
    return content.sort((a, b) => {
        const getDate = (item: ContentItem) => {
            if ('date' in item.data && item.data.date) return new Date(item.data.date as any);
            if ('publishedAt' in item.data && item.data.publishedAt) return new Date(item.data.publishedAt as any);
            return new Date(0);
        };
        const dateA = getDate(a);
        const dateB = getDate(b);
        return dateB.getTime() - dateA.getTime();
    });
}

export function filterDrafts(content: ContentItem[]): ContentItem[] {
    return content.filter((item) => {
        if ('draft' in item.data) {
            return !item.data.draft;
        }
        return true;
    });
}
