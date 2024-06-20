import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import AutoSwiper from "./AutoSwipper";
import { toast } from "react-toastify";
import Data from "../../data/Data";
import RelatedItem from "./RelatedITem";
import { Box } from "@mui/material";
import postApi from "../../api/modules/post.api";

const RelatedSlide = ({ }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { response, err } = await postApi.getPosts();
      if (response) setPosts(response);
      if (err) toast.error(err.message);
    };
    getPosts();
  }, []);

  const [medias, setMedias] = useState([]);

  return (
      <AutoSwiper >
      {posts.map((item, index) => (
        <SwiperSlide key={index} >
          <RelatedItem post={item} />
        </SwiperSlide>
      ))}
    </AutoSwiper>
  );
};

export default RelatedSlide;