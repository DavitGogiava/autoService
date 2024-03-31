import Image from "next/image";

export default function Catalogue() {
  return (
    <section className="catalogue-wrapper">
      <div className="catalogue-container">
        <h3 className="car-text one">Hatchback</h3>
        <h3 className="car-text two">SUV</h3>
        <h3 className="car-text three">Coupe</h3>

        <Image
          src="/images/arrow-white.png"
          height={40}
          width={40}
          alt="arrow"
          className="arrow one"
        />

        <Image
          src="/images/arrow-black.png"
          height={40}
          width={40}
          alt="arrow"
          className="arrow two"
        />

        <Image
          src="/images/arrow-white.png"
          height={40}
          width={40}
          alt="arrow"
          className="arrow three"
        />

        <Image
          src="/images/hatchback.png"
          height={250}
          width={375}
          alt="Hatchback"
          className="car one"
        />
        <Image
          src="/images/SUV.png"
          height={347}
          width={600}
          alt="SUV"
          className="car two"
        />

        <Image
          src="/images/Coupe.png"
          height={216}
          width={375}
          alt="Coupe"
          className="car three"
        />
      </div>
    </section>
  );
}
