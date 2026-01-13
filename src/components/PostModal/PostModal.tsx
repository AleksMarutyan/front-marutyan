import { useEffect } from "react";

import closeIcon from "@/assets/icons/close.svg";
import styles from "./PostModal.module.css";
import type { Post } from "@/types";

interface PostModalProps {
  post: Post | null;
  onClose: () => void;
}

export const PostModal: React.FC<PostModalProps> = ({ post, onClose }) => {
  useEffect(() => {
    if (post) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [post]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (post) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <img src={closeIcon} alt="Close" />
        </button>
        <article>
          <div className={styles.imageWrapper}>
            <img
              src={post.img}
              srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
              alt={post.title}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <header>
              <div className={styles.meta}>
                <span className={styles.category}>{post.tags}</span>
                <time className={styles.date} dateTime={post.date}>
                  {post.date}
                </time>
              </div>
              <h1 id="modal-title" className={styles.title}>
                {post.title}
              </h1>
            </header>
            <footer className={styles.author}>
              <span>By {post.autor}</span>
              <span className={styles.readingTime}>{post.views} views</span>
            </footer>
            <div className={styles.description}>
              <p>{post.text}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
