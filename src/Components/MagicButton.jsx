import Image from "next/image";

export default function MagicButton({ color, text }) {
    const buttonClassName = `magic-button ${color}`;
    const buttonText = text
    return (
      <button className={buttonClassName}>
        {buttonText}
        <Image
          src={`/images/arrow-${color === "red" ? "black" : "white"}.png`}
          height={30}
          width={30}
          alt="arrow"
          className="right arrow"
        />
      </button>
    );
  }
