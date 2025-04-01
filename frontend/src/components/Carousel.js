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
    <div 
      style={{ 
        width: "100vw", 
        marginBottom: "3vh",
        }}
    >
      <Slider {...settings}>
        {items.map((item, index) => (
          <Card key={index}>
            <CardMedia 
              component="img" 
              height="300" 
              image={item.image} 
              alt={item.title}
              sx={{ 
                objectFit: "initial" 
              }}
            />
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default MUICarousel;

