import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        zIndex: 10,
        marginRight: "5vw",
      height: '40px',
      width: '40px',
    //   background: url('../img/back.png') no-repeat;
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        zIndex: 2,
        marginLeft: "5vw",
        
      height: '40px',
      width: '40px',
      }}
      onClick={onClick}
    />
  );
}

export default class trial extends Component {
  render() {
    const settings = {
    //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      draggable: true,
      pauseOnHover: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      // slickNext,
      // slickPrev
    };

    const arrayData = [
      {
        image: "images/banner1.jpg",
      },
      {
        image: "images/banner2.jpg",
      },
      {
        image: "images/banner3.jpg",
      },
    ];

    const style = {
      height: "100vh",
      width: "100%",
    };

    return (
      <div
        style={{
          marginBottom: "10vh",
          width: "100%",
          borderStyle: "solid",
            // marginLeft: "10vw",
        }}
      >
        <div>
          <h2> Single Item</h2>
          <Slider {...settings}>
            {arrayData.map((ele) => (
              <>
                <div style={style}>
                  <img src={ele.image} style={style} />
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
