import styles from "./PostList.module.css";
import type { Post } from "@/types";
import { PostCard } from "@/components/PostCard";
import { CardSkeleton } from "@/components/CardSkeleton";

type PostListProps = {
  posts: Post[];
  isLoading?: boolean;
  isFiltered?: boolean;
  isError?: boolean;
  onPostClick: (post: Post) => void;
};

export const PostList = ({
  posts,
  onPostClick,
  isLoading = false,
  isFiltered = false,
  isError = false,
}: PostListProps) => {
  if (isError) {
    return (
      <div className={styles.error}>
        <p>Failed to load posts. Please try again later.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.list}>
        {Array.from({ length: 6 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className={styles.noResults}>
        <p>No posts found{isFiltered ? "matching your search." : "."}</p>
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} onClick={() => onPostClick(post)} />
      ))}
    </div>
  );
};
