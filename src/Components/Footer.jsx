'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
  ssr: false
})



export default function Footer() {

  const [map1Object, setMap1Object] = useState(null);
  // use synchronize from 0l-ext to sync both the maps
  useEffect(() => {
    if(!map1Object) return;
    var synchronize_21 = new Synchronize({ maps: [map1Object] });
    return () => {
      if(map1Object) map1Object.removeInteraction(synchronize_12);
    }
  }, [map1Object])


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
        <h5>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa magnam
          quasi laborum voluptas architecto! Eius atque sunt id voluptatem
          maxime fuga explicabo blanditiis minus iste voluptas nisi aspernatur,
          ducimus similique.
        </h5>
      </section>
      <section className="footer-col two">
        <h3>General</h3>
        <ul className="col-mid-section">
          <li>Customers</li>
          <li>Newsroom</li>
          <li>How to buy</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </section>
      <section className="footer-col three">
        <h3>Social</h3>
        <ul className="col-mid-section">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>X</li>
          <li>Linkedin</li>
        </ul>
      </section>
      <section className="footer-col four">
        <h3>Location</h3>
        <Map />
      </section>
    </footer>
  );
}
