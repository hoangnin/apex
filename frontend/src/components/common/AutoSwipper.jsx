import { Box } from "@mui/material";
import { Swiper } from "swiper/react";

const AutoSwiper = ({ children }) => {
  return (
    <Box sx={{
      "& .swiper-slide": {
        width: {
          xs: "50%",
          sm: "35%",
          md: "25%",
          lg: "20.5%"
        },
      },
      "& .swiper-wrapper": {
        display: "flex",
      },
      
    }}>
      <Swiper

        slidesPerView="4"
        grabCursor={true}
        spaceBetween={1}
        style={{ width: "100%", height: "max-content"}}

      >
        {children}
      </Swiper>
    </Box>
  );
};

export default AutoSwiper;