import styles from "./PostCard.module.css";
import type { Post } from "@/types";

type PostCardProps = {
  post: Post;
  onClick: () => void;
};

export const PostCard = ({ post, onClick }: PostCardProps) => {
  return (
    <article className={styles.card} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <img
          src={post.img}
          loading="lazy"
          alt={post.title}
          className={styles.image}
          srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
        />
      </div>
      <div className={styles.content}>
        <span className={styles.tag}>{post.tags}</span>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.excerpt}>{post.text}</p>
        <footer className={styles.meta}>
          <span className={styles.author}>{post.autor}</span>
          <span className={styles.separator}>•</span>
          <time className={styles.metaText} dateTime={post.date}>
            {post.date}
          </time>
          <span className={styles.separator}>•</span>
          <span className={styles.metaText}>{post.views} Views</span>
        </footer>
      </div>
    </article>
  );
};
