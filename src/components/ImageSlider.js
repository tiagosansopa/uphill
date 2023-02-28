import React, { useState } from "react";

const slideStyles = {
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: "10px",
  height: "100%",
  width: "100%",
};

const rightArrowStyles = {
  transform: "translate(0, -50%)",
  position: "absolute",
  cursor: "pointer",
  fontSize: "45px",
  right: "32px",
  color: "#fff",
  top: "50%",
  zIndex: 1,
};

const leftArrowStyles = {
  transform: "translate(0, -50%)",
  position: "absolute",
  cursor: "pointer",
  fontSize: "45px",
  color: "#fff",
  left: "32px",
  top: "50%",
  zIndex: 1,
};

const centerTextStyles = {
  transform: "translate(0, -50%)",
  position: "absolute",
  cursor: "pointer",
  fontSize: "40px",
  color: "#fff",
  width: "100%",
  top: "50%",
  zIndex: 1,
  left: "",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  justifyContent: "center",
  display: "flex",
};

const dotStyle = {
  cursor: "pointer",
  fontSize: "20px",
  margin: "0 3px",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,

    backgroundImage: `url(${slides[currentIndex].url})`,
    transition:
      "background-image  0.5s, background-position  0s, background-size 0s",
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div style={centerTextStyles}>
          <h1>{slides[currentIndex].title}</h1>
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>

      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            {slideIndex === currentIndex ? (
              <div
                style={{
                  color: "#ff1616",
                }}
              >
                ●
              </div>
            ) : (
              <div
                style={{
                  color: "#fff",
                }}
              >
                ●
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
