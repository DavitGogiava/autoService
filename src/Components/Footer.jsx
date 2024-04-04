
import Image from "next/image";
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
  ssr: false
})



export default function Footer() {


  return (
    <footer className="footer-wrapper">
      <section className="footer-col one">
        <div className="footer-image-container">
          <Image
            src="/images/FooterLogo.png"
            fill
            sizes="100%"
            alt="FooterLogo"
            className="footerImage"
          />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa magnam
          quasi laborum voluptas architecto! Eius atque sunt id voluptatem
          maxime fuga explicabo blanditiis minus iste voluptas nisi aspernatur,
          ducimus similique.
        </p>
      </section>
      <section className="footer-col two">
        <h2>General</h2>
        <ul className="col-mid-section">
          <li>Customers</li>
          <li>Newsroom</li>
          <li>How to buy</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </section>
      <section className="footer-col three">
        <h2>Social</h2>
        <ul className="col-mid-section">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>X</li>
          <li>Linkedin</li>
        </ul>
      </section>
      <section className="footer-col four">
        <h2>Location</h2>
        <Map />
      </section>
    </footer>
  );
}
