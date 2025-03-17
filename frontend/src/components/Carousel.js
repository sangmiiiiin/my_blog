import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
// import { Card, CardMedia, CardContent, Typography } from "@mui/material";
 import { Card, CardMedia } from "@mui/material";

import image1 from "../image/banner01.png";
import image2 from "../image/banner02.png";

const MUICarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000
  };

  const items = [
    { title: "클라이밍 바지", image: image1 },
    { title: "클라이밍 상의", image: image2 },
  ];

  return (
    <div style={{ width: "100%", marginBottom: "5%" }}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <Card key={index} sx={{ borderRadius: "8px" }}>
            <CardMedia sx={{ objectFit: "fill" }} component="img" height="350" image={item.image} alt={item.title} />
            {/* <CardContent>
              <Typography variant="h6">{item.title}</Typography>
            </CardContent> */}
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default MUICarousel;

