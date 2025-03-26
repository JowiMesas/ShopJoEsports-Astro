import {z, defineCollection } from "astro:content";
 

const productsCollection = defineCollection({
    schema: z.object({
        name: z.string(),
        description: z.string(),
        price: z.number(),
        brand: z.string().optional(),
        category: z.enum(['football', 'formula1', 'tennis']),
        image: z.string(),
        stock: z.number().default(0),
        discount: z.number().optional(),
        sizes: z.array(z.string()).optional(),
        colors: z.array(z.string()).optional(),
        tags: z.array(z.string()).optional()
    })
});


export const collections = {
    'football': productsCollection,
    'formula1': productsCollection,
    'tennis': productsCollection,
}