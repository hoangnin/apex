import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const postEndpoints = {
  getPosts: "posts",
  getPostById: ( postId ) => `posts/${postId}`,
  getReviews: ( restaurantId ) => `posts/${restaurantId}/reviews`,
};

const postApi = {
  getPosts: async () => {
    try {
      const response = await publicClient.get(postEndpoints.getPosts);
      return { response };
    } catch (err) {
      return { err };
    }
  },
  getPostById: async (postId) => {
    try {
      const response = await publicClient.get(
        postEndpoints.getPostById( postId)
      );
    
      return { response };
    } catch (err) {
      return { err };
    }
  },
  getReviews: async (restaurantId) => {
    try {
      const response = await publicClient.get(
        postEndpoints.getReviews( restaurantId)
      );
    
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default postApi;
