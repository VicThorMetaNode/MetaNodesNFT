import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

//build client from sanity
export const client = sanityClient({
    projectId: '9jtj6pgr',
    dataset: 'production',
    apiVersion: 'v2021-10-21',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

//enable image's use
const builder = imageUrlBuilder(client);

//get image's url from sanity
export const urlFor = (source) => builder.image(source);