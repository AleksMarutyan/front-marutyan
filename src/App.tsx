import { useMemo, useState } from "react";

import { PostModal } from "@/components/PostModal";
import { PostList } from "@/components/PostList";
import { Header } from "@/components/Header";
import { useFetchPosts } from "@/hooks";
import type { Post } from "@/types";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const { data: posts = [], isLoading, error } = useFetchPosts();

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return posts;
    }

    const query = searchQuery.toLowerCase();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.text.toLowerCase().includes(query) ||
        post.tags.toLowerCase().includes(query)
    );
  }, [posts, searchQuery]);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main>
        <PostList
          isError={!!error}
          isLoading={isLoading}
          posts={filteredPosts}
          onPostClick={handlePostClick}
          isFiltered={filteredPosts.length !== posts.length}
        />
      </main>
      <PostModal post={selectedPost} onClose={handleCloseModal} />
    </>
  );
};

export default App;
