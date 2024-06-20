import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const commentEndpoints = {
  updateComment: "comments/post/edit",
  
};

const commentApi = {
  updateComment: async ({commentId,quantityLike} ) => {
       try {
            const response = await publicClient.get(commentEndpoints.updateComment(commentId,quantityLike))

            return { response };
       } catch (err) { return { err } }
  },

}


export default commentApi