import type { CollectionEntry } from "astro:content";

export function sortMDByDate(posts: CollectionEntry<"post">[]) {
	return posts
		.filter(post => !post.data.draft)  // Filter out drafts
		.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

export function getUniqueTags(posts: CollectionEntry<"post">[]) {
	const uniqueTags = new Set<string>();
	posts
		.filter(post => !post.data.draft)  // Filter out drafts
		.forEach((post) => {
			post.data.tags.forEach((tag) => uniqueTags.add(tag));
		});
	return Array.from(uniqueTags);
}

export function getUniqueTagsWithCount(posts: CollectionEntry<"post">[]) {
	return posts
		.filter(post => !post.data.draft)  // Filter out drafts
		.reduce((acc, post) => {
			post.data.tags.forEach((tag) => {
				acc.set(tag, (acc.get(tag) || 0) + 1);
			});
			return acc;
		}, new Map<string, number>());
}
