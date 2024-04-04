import CardSlider from "@/Components/AutoImportPage/CardSlider";

export default function AutoImport() {


  return (
    <section className="autoimport-wrapper">
      <div className="autoimport-title">
        <h1>Find the best deal from <span style={{color: "var(--red-col)"}}>GD</span> Motors for you</h1>
      </div>
      <CardSlider />
    </section>
  );
}
