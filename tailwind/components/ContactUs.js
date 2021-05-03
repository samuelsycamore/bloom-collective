import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _subheadline from "./layout/_subheadline";
import _pageTitle from "./layout/_pageTitle";
import _paragraph from "./layout/_paragraph";
import Form from "./Form";

export default function ContactUs() {
  return (
    <section className="block contact">
      <_wrapper>
        <div className="row pt-32 flex flex-wrap gap-6">
          <div className="col w-full max-w-lg">
            <img src="https://source.unsplash.com/random" className="object-cover object-center h-96 w-full" />
          </div>
          <div className="col">
            <Form />
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
