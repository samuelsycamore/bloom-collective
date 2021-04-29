import _wrapper from "./layout/_wrapper";

export default function Content() {
  return (
    <section className="block content">
      <_wrapper>
        <div className="row flex flex-col place-items-center
        md:flex-row">
          <div className="col max-w-xl p-10">
            <h2 className="text-3xl font-bold">Content During Crisis</h2>
            <p>Majid Al Futtaim is the leading shopping mall, communities, retail and leisure pioneer across the Middle East, Africa and Asia. Find out how Bloom Collective mobilised to help them communicate during a time of crisis.</p>
          </div>
          <div className="col hidden md:block sm:w-1/2">
            <img className="w-96" src="../phone.svg" />
          </div>
        </div>
        </_wrapper>
    </section>
  );
}
