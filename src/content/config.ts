import {z, defineCollection } from "astro:content";
 

const productsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        price: z.number(),
        brand: z.string(),
        image: z.string(),
        stock: z.number().default(0),
        discount: z.number().optional(),
        sizes: z.array(z.string()).optional(),
        colors: z.array(z.string()).optional(),
        tags: z.array(z.string()).optional()
    })
});


export const collections = {
    'products': productsCollection,
}