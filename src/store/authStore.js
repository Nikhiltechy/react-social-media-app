import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: JSON.parse(
    localStorage.getItem("user")
  ) || null,

  login: (email, password) => {
    // fake user

    const fakeUser = {
      email: "test@gmail.com",
      password: "123456",
      name: "Nikhil",
    };

    if (
      email === fakeUser.email &&
      password === fakeUser.password
    ) {
      const loggedInUser = {
        name: fakeUser.name,
        email: fakeUser.email,
      };

      localStorage.setItem(
        "user",
        JSON.stringify(loggedInUser)
      );

      set({
        user: loggedInUser,
      });

      return true;
    }

    return false;
  },

  logout: () => {
    localStorage.removeItem("user");

    set({
      user: null,
    });
  },
}));

export default useAuthStore;