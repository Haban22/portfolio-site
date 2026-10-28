import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/blog"
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.coerce.date(),
        draft: z.boolean().optional().default(false),
    })
});

const experience = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/experience"
    }),
    schema: z.object({
        title: z.string(),
        logo: z.string(),
        description: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        current: z.boolean().optional().default(false),
    })
});

const education = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/education"
    }),
    schema: z.object({
        title: z.string(),
        logo: z.string().optional(),
        description: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        current: z.boolean().optional().default(false),
    })
});

const projects = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/projects"
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        url: z.string().url().optional(),
        github: z.string().url().optional(),
        download: z.string().url().optional(),
        featured: z.boolean().optional().default(false),
        techs: z.array(z.string()).optional(),
        category: z.string().optional(),
        publishedAt: z.coerce.date().optional(),
        draft: z.boolean().optional().default(false),
    })
});

const site = defineCollection({
    loader: file("./src/content/site/config.json"),
    schema: z.object({
        name: z.string(),
        title: z.string(),
        introduction: z.string(),
        location: z.string().optional(),
        sections: z.object({
            blog: z.object({
                title: z.string(),
                viewAllText: z.string(),
            }),
            projects: z.object({
                title: z.string(),
                viewAllText: z.string(),
            }),
            experience: z.object({
                title: z.string(),
                viewAllText: z.string(),
            }),
            skills: z.object({
                title: z.string(),
                viewAllText: z.string(),
            }),
            education: z.object({
                title: z.string(),
                viewAllText: z.string().optional(),
            }).optional(),
        }),
        socialLinks: z.array(z.object({
            platform: z.string(),
            url: z.string(),
        })).optional(),
    })
});

const notes = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/notes"
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.coerce.date(),
        category: z.string(),
        draft: z.boolean().optional().default(false),
    })
});

const bookmarks = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/bookmarks"
    }),
    schema: z.object({
        title: z.string(),
        type: z.enum(["article", "book", "video"]),
        author: z.string(),
        url: z.string().url(),
        publishedAt: z.coerce.date(),
        createdAt: z.coerce.date(),
        description: z.string().optional(),
    })
});

const skills = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/skills"
    }),
    schema: z.object({
        title: z.string().optional(),
        skills: z.array(z.string()).optional(),
    })
});

export const collections = {
    skills,
    blog,
    experience,
    education,
    projects,
    site,
    notes,
    bookmarks,
};
