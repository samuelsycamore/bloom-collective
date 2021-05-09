import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _subheadline from "./layout/_subheadline";
import _pageTitle from "./layout/_pageTitle";
import _paragraph from "./layout/_paragraph";

import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _paragraph from "./layout/_paragraph";

export default function ContentF(props) {
  return (
    <section className="block content-f">
      <_wrapper>
        <div className="row py-5 grid gap-4 md:grid-cols-2">
          <div className="col md:w-1/2">
            <_headline>{props.headline}</_headline>
            <_paragraph>{props.paragraphOne}</_paragraph>
            <_paragraph>{props.paragraphTwo}</_paragraph>
            <_paragraph>{props.paragraphThree}</_paragraph>
          </div>
          <div className="col md:w-1/2">somtehx[]</div>
        </div>
      </_wrapper>
    </section>
  );
}
