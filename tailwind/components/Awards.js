import _wrapper from "./layout/_wrapper";
import _subheadline from "./layout/_subheadline";

export default function Clients() {
  return (
    <section className="block clients">
      <_wrapper>
        <div className="row text-center py-10">
          <div className="col">
            <_subheadline>We are an award-winning agency.</_subheadline>
          </div>
        </div>
        <div
          className="row
        flex flex-col place-items-center gap-4
        sm:flex-row sm:justify-between"
        >
          <div className="col">
            <span className="block">LOGO</span>
          </div>
          <div className="col">
            <span className="block">LOGO</span>
          </div>
          <div className="col">
            <span className="block">LOGO</span>
          </div>
          <div className="col">
            <span className="block">LOGO</span>
          </div>
          <div className="col">
            <span className="block">LOGO</span>
          </div>
          <div className="col">
            <span className="block">LOGO</span>
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
