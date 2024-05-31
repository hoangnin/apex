import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const postEndpoints = {
  getPosts: "posts",
  
};

const postApi = {
  getPosts: async ( ) => {
       try {
            const response = await publicClient.get(postEndpoints.getPosts)

            return { response };
       } catch (err) { return { err } }
  },
//   signup: async ({ username, displayName, phoneNumber, email, password, confirmPassword, role, location }) => {
//        try {
//             // if(role === "PHOTOGRAPHER") {
//             //      const response = await publicClient.post(postEndpoints.signup,
//             //           { username, displayName, phoneNumber, email, password, confirmPassword, role, location })
//             //      return { response };
//             // }else {
//                  const response = await publicClient.post(postEndpoints.signup,
//                       { username, displayName, phoneNumber, email, password, confirmPassword, role })
//                  return { response };
//             // }
           
//        } catch (err) { return { err } }
//   },
  // passwordUpdate: async ({ password, newPassword, confirmNewPassword }) => {
  //      try {
  //           const response = await privateClient.put(postEndpoints.passwordUpdate, { password, newPassword, confirmNewPassword });
  //           return { response };
  //      } catch (err) { return { err } }
  // },
  // getInfo: async () => {
  //      try {
  //           const response = await privateClient.get(postEndpoints.getInfo);
  //           return { response };
  //      } catch (err) { return { err } }
  // },
  // updateInfo: async (userData) => {
  //      try {
  //           console.log(userData);
  //           const response = await privateClient.put(postEndpoints.updateInfo, userData);
  //           return { response };
  //      } catch (err) { return { err } }
  // }
}


export default postApi