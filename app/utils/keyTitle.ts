export const extractFilter = (url: string): string | null => {
  const parsedUrl = new URL(url);
  return parsedUrl.searchParams.get("filter");
};
