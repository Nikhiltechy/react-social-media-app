import {
  Search,
  Chat,
  Notifications,
} from "@mui/icons-material";

import Avatar from "@mui/material/Avatar";

function Navbar() {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900 px-6 flex items-center justify-between">

      <h1 className="text-xl font-bold">
        Home
      </h1>

      <div className="flex items-center gap-4">

        <div className="flex items-center bg-slate-800 rounded-xl px-3 py-2">

          <Search className="text-slate-400" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-2 text-sm"
          />
        </div>

        <Chat className="cursor-pointer" />

        <Notifications className="cursor-pointer" />

        <Avatar />

      </div>
    </header>
  );
}

export default Navbar;    