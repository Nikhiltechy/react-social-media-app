import {
  useEffect,
  useRef,
  useState,
} from "react";

import PostCard from "../components/feed/PostCard";
import posts from "../data/posts";

function Home() {
  const [visiblePosts, setVisiblePosts] =
    useState([]);

  const [page, setPage] =
    useState(1);

  const scrollRef = useRef(null);

  const POSTS_PER_PAGE = 5;

  // load posts
  useEffect(() => {
    const newPosts = posts.slice(
      0,
      page * POSTS_PER_PAGE
    );

    setVisiblePosts(newPosts);
  }, [page]);

  // infinite scroll
  const handleScroll = () => {
    const container =
      scrollRef.current;

    if (!container) return;

    const scrollTop =
      container.scrollTop;

    const scrollHeight =
      container.scrollHeight;

    const clientHeight =
      container.clientHeight;

    if (
      scrollTop + clientHeight >=
      scrollHeight - 100
    ) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className="max-w-2xl mx-auto space-y-5 h-[calc(100vh-100px)] overflow-y-auto pr-2"
    >
      {visiblePosts.map((post) => (
        <PostCard
          key={post.id}
          username={post.username}
          time={post.time}
          caption={post.caption}
          image={post.image}
          likes={post.likes}
          comments={post.comments}
        />
      ))}
    </div>
  );
}

export default Home;