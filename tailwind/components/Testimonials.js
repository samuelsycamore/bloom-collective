import _wrapper from "./layout/_wrapper";
import _subheader from "./layout/_subheader";
import _paragraph from "./layout/_paragraph";

export default function Testimonials() {
  return (
    <section className="block testimonials">
      <_wrapper>
        <div className="row flex place-items-center gap-2 mx-auto max-w-4xl">
          <div className="col">
            arrow
          </div>
          <div className="col flex flex-col place-items-center gap-2">
            <_subheader>Some of our partners and clients.</_subheader>
            <_paragraph>“We've been working with Bloom for more than a year now. Our previous experience with outsource teams was not always positive. In the case of Bloom, everything is perfect: adequate estimation and work on time...”</_paragraph>
            <img src="https://source.unsplash.com/random" className="rounded-full w-16 h-16" />
            <h4>Chris Young</h4>
            <h5>Creative Director at Youtube</h5>
          </div>
          <div className="col">
            arrow
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
