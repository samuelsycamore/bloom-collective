import _wrapper from "./layout/_wrapper";
import _paragraph from "./layout/_paragraph";

export default function CaseStudy() {
  return (
    <section className="caseStudy">
      <_wrapper>
        <div className="row grid gap-4 md:grid-cols-2 md:grid">
          <div className="col max-w-96">
            <h3 className="text-2xl sm:text-4xl font-bold text-center">
              <span className="inline-block text-yellow-300 line-yellow">
                Empowering
              </span>{" "}
              businesses with content workflows.
            </h3>
          </div>
          <div className="col">
            <_paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </_paragraph>
            <_paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </_paragraph>
            <_paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </_paragraph>
            <div className="flex flex-col justify-center items-center gap-4
            sm:justify-left sm:items-left">
              <img
                src="https://source.unsplash.com/random"
                className="rounded-full w-16 h-16"
              />
              <h4 className="font-bold text-xl">Matthew Ooley</h4>
              <h5>Founder at Bloom Collective</h5>
            </div>
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
