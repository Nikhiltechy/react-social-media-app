import Avatar from "@mui/material/Avatar";

const users = [
  "Alex",
  "Emma",
  "John",
];

function RightSidebar() {
  return (
    <aside className="w-80 h-screen border-l border-slate-800 bg-slate-900 p-5 hidden xl:block">

      <h2 className="font-bold text-lg mb-4">
        Suggested Users
      </h2>

      <div className="space-y-4">

        {users.map((user) => (
          <div
            key={user}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Avatar />
              <span>{user}</span>
            </div>

            <button className="bg-blue-600 px-3 py-1 rounded-lg text-sm">
              Follow
            </button>
          </div>
        ))}

      </div>
    </aside>
  );
}

export default RightSidebar;