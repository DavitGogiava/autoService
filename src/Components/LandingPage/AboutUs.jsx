import Image from "next/image";
import MagicButton from "../MagicButton";

export default function AboutUs() {
  return (
    <section className="aboutus-wrapper">
      <div className="right-side-text">
        <h1>Who <br></br>we are ? </h1>
        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptatum accusamus corrupti ab expedita illum vel harum cupiditate aspernatur eos. Tempore pariatur nihil quo earum delectus sint, sunt voluptatem dolore!</h4>
        <MagicButton color={"red"} text={"About Us"}/>
      </div>
    </section>
  );
}
