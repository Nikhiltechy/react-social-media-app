import {
  FavoriteBorder,
  ChatBubbleOutlineOutlined,
  Repeat,
  Send,
} from "@mui/icons-material";

import Avatar from "@mui/material/Avatar";

function PostCard({
  username,
  time,
  caption,
  image,
  likes,
  comments,
}) {
  return (
    <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">

      <div className="flex items-center gap-3 mb-4">
        <Avatar />

        <div>
          <h3 className="font-semibold">
            {username}
          </h3>

          <p className="text-sm text-slate-400">
            {time}
          </p>
        </div>
      </div>

      <p className="mb-4">
        {caption}
      </p>

      <img
        src={image}
        alt="post"
        className="rounded-xl mb-4 w-full"
      />

      <div className="flex justify-between items-center text-slate-400">

        <div className="flex items-center gap-2">
          <FavoriteBorder className="cursor-pointer" />
          <span>{likes}</span>
        </div>

        <div className="flex items-center gap-2">
          <ChatBubbleOutlineOutlined className="cursor-pointer" />
          <span>{comments}</span>
        </div>

        <Repeat className="cursor-pointer" />

        <Send className="cursor-pointer" />

      </div>
    </div>
  );
}

export default PostCard;