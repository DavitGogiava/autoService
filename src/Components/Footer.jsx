import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <section className="footer-col one">
        <div className="footer-image-container">
          <Image
            src="/images/FooterLogo.png"
            fill
            alt="FooterLogo"
            className="footerImage"
          />
        </div>
        <h5>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa magnam
          quasi laborum voluptas architecto! Eius atque sunt id voluptatem
          maxime fuga explicabo blanditiis minus iste voluptas nisi aspernatur,
          ducimus similique.
        </h5>
      </section>
      <section className="footer-col two">
        <h3>Product</h3>
        <ul className="col-mid-section">
          <li>Top optimization</li>
          <li>Bandwidth management</li>
          <li>Network Visibility</li>
        </ul>
      </section>
      <section className="footer-col three">
        <h3>General</h3>
        <ul className="col-mid-section">
          <li>Customers</li>
          <li>Newsroom</li>
          <li>How to buy</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </section>
      <section className="footer-col four">
        <h3>Social</h3>
        <ul className="col-mid-section">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>X</li>
          <li>Linkedin</li>
        </ul>
      </section>
    </footer>
  );
}
