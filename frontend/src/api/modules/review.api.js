import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const postEndpoints = {
  getReview: "posts",
  
};

const postApi = {
  getPosts: async ( ) => {
       try {
            const response = await publicClient.get(postEndpoints.getPosts)

            return { response };
       } catch (err) { return { err } }
  },

}


export default postApi