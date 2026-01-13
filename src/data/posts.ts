import type { Post } from "@/types";

const API_URL = "https://cloud.codesupply.co/endpoint/react/data.json";

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};
