function SectionFamily() {
  return (
    <>
      <article className="fonts">
        <header className="h3">
          <h3>Font Family</h3>
        </header>
        <p className="sans">Ini adalah font family sans serif.</p>
        <p className="Bahnschrift">ini adalah font family arial.</p>
      </article>
    </>
  );
}

function SectionSize() {
  return (
    <>
      <article className="fonts">
        <header className="h3">
          <h3>Font Size</h3>
        </header>
        <p className="px">Ini adalah font size 22px.</p>
        <p className="em">ini adalah font size 2em.</p>

        <p className="rem">Ini adalah font size 2rem.</p>

        <h4 className="vw">Ini adalah font size 8vw.</h4>
      </article>
    </>
  );
}

function SectionWeight() {
  return (
    <>
      <article className="fonts">
        <header className="h3">
          <h3>Font Weight</h3>
        </header>
        <p className="sans">Ini adalah font family sans serif.</p>
        <p className="Bahnschrift">ini adalah font family arial.</p>
      </article>
    </>
  );
}

export default function Fonts() {
  return (
    <>
      <section className="fonts">
        <header className="fonts">
          <h2>FONTS</h2>
        </header>

        <section className="fonts-dua">
          <SectionFamily />
          <SectionSize />
          <SectionWeight />
          <SectionFamily />
        </section>
      </section>
    </>
  );
}
