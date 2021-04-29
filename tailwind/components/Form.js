import _wrapper from "./layout/_wrapper";
import _subheadline from "./layout/_subheadline";
import _paragraph from "./layout/_paragraph";
import _field from "./layout/_field";
import _dropdown from "./layout/_dropdown";

export default function Form() {
  return (
    <section className="block form">
      <_wrapper>
        <div
          className="row max-w-lg 
        mx-auto
        flex flex-col"
        >
          <div className="col px-5 py-10">
            <h3 className="text-2xl sm:text-4xl font-bold text-center">
              Tell us everything and
              <br />
              <span className="inline-block text-yellow-300 line-yellow">
                let's get to work
              </span>
            </h3>
            <p className="py-5 text-center">
              Please share your thoughts in the form below and we’ll be in
              touch. We’d love to hear from you.
            </p>
            <form name="contact" method="POST">
              <_field type="text" name="name" placeholder="Your full name" />

              <_field type="email" name="email" placeholder="Your email" />

              <_field
                type="text"
                name="phone"
                placeholder="Your phone number"
              />

              <_field type="text" name="company" placeholder="Your company" />

              <_subheadline>What are you looking for?</_subheadline>
              <_dropdown
                type="text"
                name="what"
                value1="social media marketing"
                value2="some other stuff"
                value3="even more other"
              />
              <_subheadline>What is your budget?</_subheadline>
              <_dropdown
                type="text"
                name="budget"
                value1="Less than 25k"
                value2="25k - 75k"
                value3="More than 75k"
              />
              <_subheadline>How can we be of assistance?</_subheadline>
              <_field
                type="text"
                name="message"
                placeholder="Your message..."
              />

              <button
                type="submit"
                className="px-5 py-3 w-full sm:w-1/2
              bg-yellow-300
              text-black
              border-2 border-yellow-300
              transition duration-300 ease-in-out
              transform hover:-translate-y-1 hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
