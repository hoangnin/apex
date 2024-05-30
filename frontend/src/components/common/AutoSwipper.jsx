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
        }
      }
    }}>
      <Swiper
        slidesPerView="3"
        grabCursor={true}
        spaceBetween={30}
        style={{ width: "100%", height: "max-content"}}

      >
        {children}
      </Swiper>
    </Box>
  );
};

export default AutoSwiper;