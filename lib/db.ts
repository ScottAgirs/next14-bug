import { unstable_noStore as noStore } from 'next/cache';

const GRAPHQL_URL = `https://countries.trevorblades.com/graphql`;

export async function fetchPosts(query: any) {
  noStore();

  try {
    const payload = await fetch(`${GRAPHQL_URL}`, {
      next: {
        revalidate: 20,
        tags: ['posts'],
      },
      // eslint-disable-next-line sort-keys
      body: JSON.stringify({
        query: `{ countries { code name } }`,
      }),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).then(res => res.json());
    console.log(`🚀 ~ payload:`, payload);

    return payload?.data?.countries;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('fetchPosts Error:', error);
    throw new Error('Failed to fetch posts.');
  }
}
export async function fetchProducts(query: any) {
  noStore();

  try {
    const payload = await fetch(`${GRAPHQL_URL}`, {
      body: JSON.stringify({
        query: `{ countries { code name } }`,
      }),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).then(res => res.json());

    return payload?.data?.countries;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('fetchProducts Error:', error);
    throw new Error('Failed to fetch posts.');
  }
}
