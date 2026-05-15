import PostCard from "../components/feed/PostCard";

import bookmarkedPosts from "../data/bookmarks";

function Bookmarks() {
  return (
    <div className="max-w-2xl mx-auto">

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          Saved Posts
        </h1>

        <p className="text-slate-400 mt-2">
          Your bookmarked content
        </p>

      </div>

      <div className="space-y-5">

        {bookmarkedPosts.map(
          (post) => (
            <PostCard
              key={post.id}
              username={
                post.username
              }
              time={post.time}
              caption={
                post.caption
              }
              image={post.image}
              likes={post.likes}
              comments={
                post.comments
              }
            />
          )
        )}

      </div>

    </div>
  );
}

export default Bookmarks;