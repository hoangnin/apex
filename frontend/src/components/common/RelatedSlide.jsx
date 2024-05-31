import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import AutoSwiper from "./AutoSwipper";
import { toast } from "react-toastify";
import Data from "../../data/Data";
import RelatedItem from "./RelatedITem";
import { Box } from "@mui/material";

const RelatedSlide = ({ }) => {
  const [medias, setMedias] = useState([]);
//   useEffect(() => {
//     const getMedias = async () => {
//       const { response, err } = await mediaApi.getList({
//         mediaType,
//         mediaCategory,
//         page: 1
//       });

//       if (response) setMedias(response.results);
//       if (err) toast.error(err.message);
//     };

//     getMedias();
//   }, [mediaType, mediaCategory]);

  return (
      <AutoSwiper >
      {Data.post.slice(0, 4).map((item, index) => (
        <SwiperSlide key={index} >
          <RelatedItem post={item} />
        </SwiperSlide>
      ))}
    </AutoSwiper>
  );
};

export default RelatedSlide;