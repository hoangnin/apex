import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const userEndpoints = {
  login: "accounts/login",
  signup: "accounts/signup",
  updatePassword: "accounts/change-password",
  updateInfo: "accounts/update-info",

};

const userApi = {
  login: async ({ username, password }) => {
    try {
      const response = await publicClient.post(userEndpoints.login, {
        username,
        password,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
  signup: async ({
    username,
    displayName,
    phoneNumber,
    email,
    password,
    confirmPassword,
    role,
    location,
    openingHours,
    closingHours,
    restaurantName,
    type,
    priceRange,
    rushHours,
  }) => {
    try {
      if (role === "RESTAURANT") {
        const response = await publicClient.post(userEndpoints.signup, {
          username,
          displayName,
          phoneNumber,
          email,
          password,
          confirmPassword,
          role,
          location,
          openingHours,
          closingHours,
          restaurantName,
          type,
          priceRange,
          rushHours,
        });
        return { response };
      } else {
        const response = await publicClient.post(userEndpoints.signup, {
          username,
          displayName,
          phoneNumber,
          email,
          password,
          confirmPassword,
          role,
        });
        return { response };
      }
    } catch (err) {
      return { err };
    }
  },
  updatePassword: async ({ password, newPassword, confirmNewPassword }) => {
    try {
      const response = await privateClient.put(userEndpoints.updatePassword, {
        password,
        newPassword,
        confirmNewPassword,
      });
      return { response };
    } catch (err) {
      return { err };
    }
  },
  // getInfo: async () => {
  //      try {
  //           const response = await privateClient.get(userEndpoints.getInfo);
  //           return { response };
  //      } catch (err) { return { err } }
  // },
  updateInfo: async (userData) => {
    try {
      console.log(userData);
      const response = await privateClient.put(
        userEndpoints.updateInfo,
        userData
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default userApi;
