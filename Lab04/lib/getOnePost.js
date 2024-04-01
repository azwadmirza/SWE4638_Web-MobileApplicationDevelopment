export default async function getOnePost(id) {
  const result = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return result.json();
}
