import Image from "next/image";

export default function Catalogue() {
  return (
    <section className="catalogue-wrapper">
      <div className="catalogue-container">
        <div className="row one">
          <h2 className="car-text one">Hatchback</h2>
          <Image
            src="/images/arrow-white.png"
            height={40}
            width={40}
            alt="arrow"
            className="arrow one"
          />
          <div className="car-image-container one">
            <Image
              src="/images/hatchback.png"
              fill
              sizes="100%"
              alt="Hatchback"
              className="car one"
            />
          </div>
        </div>
        <div className="row two">
          <h2 className="car-text two">SUV</h2>

          <Image
            src="/images/arrow-black.png"
            height={40}
            width={40}
            alt="arrow"
            className="arrow two"
          />

          <div className="car-image-container two">
            <Image
              src="/images/SUV.png"
              fill
              sizes="100%"
              alt="SUV"
              className="car two"
            />
          </div>
        </div>
        <div className="row three">
          <h2 className="car-text three">Coupe</h2>

          <Image
            src="/images/arrow-white.png"
            height={40}
            width={40}
            alt="arrow"
            className="arrow three"
          />
          <div className="car-image-container three">
            <Image
              src="/images/Coupe.png"
              fill
              sizes="100%"
              alt="Coupe"
              className="car three"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
