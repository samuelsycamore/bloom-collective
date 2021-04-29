import _wrapper from "./layout/_wrapper";

export default function Clients() {
  return (
    <div className="block Clients">
      <_wrapper>
        <div
          className="row py-8
        flex flex-col place-items-center gap-4
        sm:flex-row sm:justify-between
        "
        >
          <div className="col">
            <h3
              className="title 
            text-2xl font-bold
            sm:text-3xl"
            >
              Clients who trust us.
            </h3>
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
    </div>
  );
}
