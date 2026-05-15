import Avatar from "@mui/material/Avatar";

function NotificationCard({
  user,
  action,
  time,
  unread,
}) {
  return (
    <div
      className={`
        bg-slate-900 border
        rounded-2xl p-4
        flex items-center gap-4
        transition hover:bg-slate-800
        ${
          unread
            ? "border-blue-500"
            : "border-slate-800"
        }
      `}
    >
      <Avatar />

      <div className="flex-1">

        <p className="text-white">
          <span className="font-semibold">
            {user}
          </span>{" "}
          {action}
        </p>

        <p className="text-sm text-slate-400 mt-1">
          {time}
        </p>

      </div>

      {unread && (
        <div className="w-3 h-3 rounded-full bg-blue-500" />
      )}
    </div>
  );
}

export default NotificationCard;