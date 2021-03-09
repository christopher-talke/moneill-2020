import React from "react"
import styled from "styled-components"
import Slider from "react-slick";

const Feedback = ({ data }) => {

  const SliderSettings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
    draggable:false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 2,
    centerPadding: '15px',
    responsive: [
      {
        breakpoint: 450,
        settings: {
          fade: true,
        }
      }
    ]
  };

  return (
    <StyledFeedback>
      <div className="feedback-container">
        <Slider {...SliderSettings}>
          {data.clientfeedback.map((client, key) => (
            <div
            className="client-feedback-card"
            key={`${client.fullname}-${key}`}
            >
              <p>"{client.feedback}"</p>
              <h5>{client.fullname}</h5>
            </div>
          ))}
        </Slider>
      </div>
    </StyledFeedback>
  )
}

export default Feedback

const StyledFeedback = styled.section`
  position: relative;
  z-index: 50;
  /* padding: 0 25px; */
  margin-bottom: 100px;

  .slick-slide {
    text-align: center;
  }

  .client-feedback-card {
    max-width: calc(100vw - 30px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 35px 0px;
    margin: 25px auto;
    border: 1px solid #eaeaea;
    text-align: center;
    background: white;
    box-shadow: -2px 4px 6px 0px rgb(184, 184, 184);

    p {
      margin-top: 0;
      font-family: Open Sans;
      font-style: italic;
      font-weight: 300;
      font-size: 16px;
      padding: 35px;
    }

    h5 {
      margin-top: 4px;
      margin-bottom: 0;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
    }
  }

  @media (min-width: 1025px) {
    padding: 0;

    .feedback-container {
      max-width: 1150px;
      margin: 0 auto;
    }

    .client-feedback-card {
      max-width: calc(100% - 60px);
      height: 100%;

      p {
        font-size: 14px;
      }
    }
  }
`
