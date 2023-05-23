export const fetcher = async (uri) => {
  const data = await fetch(uri);
  const json = await data.json();
  return json;
};
