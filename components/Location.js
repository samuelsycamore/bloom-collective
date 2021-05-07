import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _subheadline from "./layout/_subheadline";
import _pageTitle from "./layout/_pageTitle";
import _paragraph from "./layout/_paragraph";

export default function Location(props) {
  return (
    <section className="location">
      <_wrapper>
        <div className="row grid gap-10 md:grid-cols-2 items-center">
          <div className="col max-w-md">
            <_headline>
              {props.headlineNoUnderline}{" "}
              <span className="inline-block text-yellow-300 line-yellow">
                {props.headlineUnderline}
              </span>
            </_headline>
            <_paragraph>
              {props.text}
            </_paragraph>
          </div>
          <div className="col">
            <img
              src="https://source.unsplash.com/random"
              className="w-full object-cover object-center"
            />
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
