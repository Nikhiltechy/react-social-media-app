import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import profile from "../data/profile";
import profilePosts from "../data/profilePosts";

import PostCard from "../components/feed/PostCard";

function Profile() {
  return (
    <div className="max-w-3xl mx-auto">

      {/* COVER */}
      <div className="relative">

        <img
          src={profile.coverImage}
          alt="cover"
          className="w-full h-64 object-cover rounded-3xl"
        />

        <Avatar
          src={profile.profileImage}
          sx={{
            width: 120,
            height: 120,
          }}
          className="!absolute left-8 -bottom-14 border-4 border-slate-950"
        />
      </div>

      {/* PROFILE INFO */}
      <div className="mt-20">

        <div className="flex justify-between items-start">

          <div>

            <h1 className="text-3xl font-bold">
              {profile.name}
            </h1>

            <p className="text-slate-400">
              {profile.username}
            </p>

          </div>

          <Button
            variant="contained"
            sx={{
              borderRadius: "12px",
            }}
          >
            Edit Profile
          </Button>

        </div>

        <p className="mt-5 text-slate-300">
          {profile.bio}
        </p>

      </div>

      {/* STATS */}
      <div className="flex gap-10 mt-8 border-y border-slate-800 py-5">

        <div>
          <h3 className="font-bold text-xl">
            {profile.postsCount}
          </h3>

          <p className="text-slate-400">
            Posts
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl">
            {profile.followers}
          </h3>

          <p className="text-slate-400">
            Followers
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl">
            {profile.following}
          </h3>

          <p className="text-slate-400">
            Following
          </p>
        </div>

      </div>

      {/* POSTS */}
      <div className="mt-8 space-y-5">

        <h2 className="text-2xl font-bold">
          Posts
        </h2>

        {profilePosts.map((post) => (
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

    </div>
  );
}

export default Profile;