import MagicButton from "../MagicButton";

export default function AboutUs({styles}) {
  return (
    <section className={styles.aboutusWrapper}>
      <div className={styles.rightSideText}>
        <h2>Who Are We ? </h2>
        <h3>At, <span style={{color: "#ef3f25"}}>Foo Motors</span>, we specialize in providing top-notch car rental services for imported vehicles and auto service. Whether you&apos;re looking to rent a premium car for travel or need professional auto services, we&apos;ve got you covered. Our goal is to make your driving experience comfortable, safe, and enjoyable. With a wide selection of luxury cars and expert services, we&apos;re ready to meet all your automotive needs. Trust us for an unforgettable driving experience!</h3>
        <MagicButton color={"red"} text={"About Us"}/>
      </div>
    </section>
  );
}
