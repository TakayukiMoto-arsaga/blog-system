// microCMS
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'blog-system',
  apiKey: process.env.BLOG_API_KEY,
});
