"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";

export default function CardSlider() {
  const [position, setPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const cards = [
    {
      imageSrc: "/images/bmw.png",
      text: "BMW Cupe 2018",
    },
    {
      imageSrc: "/images/bmw.png",
      text: "BMW Cupe 2018",
    },
    {
      imageSrc: "/images/bmw.png",
      text: "BMW Cupe 2018",
    },
    {
      imageSrc: "/images/bmw.png",
      text: "BMW Cupe 2018",
    },
    {
      imageSrc: "/images/bmw.png",
      text: "BMW Cupe 2018",
    },
  ];

  const handleNext = () => {
    setPosition((prevPosition) => Math.min(prevPosition + 1, cards.length - 3));
  };

  const handlePrev = () => {
    setPosition((prevPosition) => Math.max(prevPosition - 1, 0));
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const middleIndex = position + 1;

  return (
    <section className="carousel-wrapper">
      <svg
        className="carrousel-arrow"
        height="50px"
        width="50px"
        viewBox="0 0 512 512"
        fill="red"
        onClick={handlePrev}
      >
        <g>
          <g>
            <path
              d="M168.837,256L388.418,36.418c8.331-8.331,8.331-21.839,0-30.17c-8.331-8.331-21.839-8.331-30.17,0L123.582,240.915
              c-8.331,8.331-8.331,21.839,0,30.17l234.667,234.667c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17
              L168.837,256z"
            />
          </g>
        </g>
      </svg>

      <div className="carousel">
        <div
          className="cards-container"
          style={{
            transform: `translateX(-${position * (20 + windowWidth * 0.25)}px)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              className={`card ${index === middleIndex ? "active" : ""}`}
              key={index}
            >
              <p className="card-title">{card.text}</p>
              <Image src={card.imageSrc} fill alt={card.text} />
              <p className="card-price">$100/Day</p>
              <Rating
                initialValue={3}
                onClick={function noRefCheck() {}}
                transition
              />
            </div>
          ))}
        </div>
      </div>
      <svg
        className="carrousel-arrow"
        height="50px"
        width="50px"
        viewBox="0 0 512 512"
        fill="red"
        onClick={handleNext}
      >
        <g>
          <g>
            <path
              d="M168.837,256L388.418,36.418c8.331-8.331,8.331-21.839,0-30.17c-8.331-8.331-21.839-8.331-30.17,0L123.582,240.915
              c-8.331,8.331-8.331,21.839,0,30.17l234.667,234.667c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17
              L168.837,256z"
            />
          </g>
        </g>
      </svg>
    </section>
  );
}
