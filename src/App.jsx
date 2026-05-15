import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Bookmarks from "./pages/Bookmarks";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={ <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>}>

          <Route index element={<Home />} />

          <Route
            path="profile"
            element={<Profile />}
          />

          <Route
            path="bookmarks"
            element={<Bookmarks />}
          />

          <Route
            path="notifications"
            element={<Notifications />}
          />

        </Route>
        <Route
          element={<AuthLayout />}
        >
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />
        </Route>

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;