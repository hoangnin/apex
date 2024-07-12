import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const blogEndpoints = {
  getBlogs: "blogs",
  getBlogById: ( blogId ) => `blogs/${blogId}`,
//   getReviews: ( restaurantId ) => `blogs/${restaurantId}/reviews`,
};

const blogApi = {
  getBlogs: async () => {
    try {
      const response = await publicClient.get(blogEndpoints.getBlogs);
      return { response };
    } catch (err) {
      return { err };
    }
  },
  getBlogById: async (blogId) => {
    try {
      const response = await publicClient.get(
        blogEndpoints.getBlogById( blogId)
      );
    
      return { response };
    } catch (err) {
      return { err };
    }
  },

};

export default blogApi;
