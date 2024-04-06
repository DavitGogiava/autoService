"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function MainSlider({ styles }) {
  const [position, setPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0); // Track selected card index

  const cards = [
    {
      imageSrc: "/images/1.png",
      text: "Mercedes-Benz C 300, 2018",
      price: "100",
    },
    {
      imageSrc: "/images/2.png",
      text: "Audi A5, 2019",
      price: "200",
    },
    {
      imageSrc: "/images/3.png",
      text: "Audi RS5, 2019",
      price: "300",
    },
    {
      imageSrc: "/images/4.png",
      text: "Toyota RAV4, 2021",
      price: "300",
    },
    {
      imageSrc: "/images/5.png",
      text: "Toyota RAV4, 2020",
      price: "300",
    },
  ];
  const handleNext = () => {
    setPosition((prevPosition) => Math.min(prevPosition + 1, cards.length - 1));
    setSelectedCardIndex((prevIndex) =>
      Math.min(prevIndex + 1, cards.length - 1)
    ); // Update selected card index
  };

  const handlePrev = () => {
    setPosition((prevPosition) => Math.max(prevPosition - 1, 0));
    setSelectedCardIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Update selected card index
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.autoimportContainer}>
      <p className={styles.title}>твоя машина премиум-класса</p>

      <div className={styles.carsliderContainer}>
        <svg
          className={styles.carouselArr}
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
        <div className={styles.carousel}>
          <div
            className={styles.carContainer}
            style={{
              transform: `translateX(-${position * (windowWidth * 1 + 20)}px)`,
            }}
          >
            {cards.map((card, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardImage}>
                  <Image src={card.imageSrc} fill alt={card.text} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <svg
          className={styles.carouselArr}
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

        <div className={styles.cardInfoContainer}>
          {cards.map((card, index) => (
            <div key={index} className={`cardInfo ${selectedCardIndex === index ? "selected" : ""}`}>
              <p className={styles.cardText}>{card.text}</p>
              <p className={styles.cardText}>{card.price}$</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}