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
      <button className="prevButton" onClick={handlePrev}>
        Prev
      </button>
      <div className="carousel">
        <div
          className="cards-container"
          style={{
            transform: `translateX(-${
              position * (20 + windowWidth * 0.2)
            }px)`,
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
      <button className="nextButton" onClick={handleNext}>
        Next
      </button>
    </section>
  );
}
