import {
  Home,
  Person,
  Bookmark,
  Notifications,
} from "@mui/icons-material";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <Person />,
  },
  {
    name: "Bookmarks",
    path: "/bookmarks",
    icon: <Bookmark />,
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: <Notifications />,
  },
];

function Sidebar() {
  return (
   <aside className="w-64 h-screen bg-slate-900 border-r border-slate-800 p-5">

      <h1 className="text-2xl font-bold mb-8">
        ConnectSphere
      </h1>

      <nav className="flex flex-col gap-3">

        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `
              flex items-center gap-3
              p-3 rounded-xl transition
              ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-800"
              }
            `
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}

      </nav>
    </aside>
  );
}

export default Sidebar;