import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _subheadline from "./layout/_subheadline";
import _pageTitle from "./layout/_pageTitle";
import _paragraph from "./layout/_paragraph";

export default function Services( props ) {
  return (
    <section className="Services">
      <_wrapper>
        <div className="row pt-32 pb-10">
          <div className="col">
            <_pageTitle>{props.headline}</_pageTitle>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img
              src="https://source.unsplash.com/random"
              className="w-full h-96 object-center object-cover"
            />
          </div>
        </div>
        <div className="row">
          <div className="col text-center pt-10 pb-5">
            <_subheadline>{props.subheader}</_subheadline>
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
