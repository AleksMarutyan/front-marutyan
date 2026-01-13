import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";
import { fetchPosts } from "@/data/posts";
import type { Post } from "@/types";

type UseFetchPostsOptions = {
  queryOptions?: Omit<UseQueryOptions<Post[], Error>, "queryKey" | "queryFn">;
};

export const useFetchPosts = (
  options?: UseFetchPostsOptions
): UseQueryResult<Post[], Error> => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    ...options?.queryOptions,
  });
};
