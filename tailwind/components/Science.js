import _wrapper from "./layout/_wrapper";
import _subheader from "./layout/_subheader";

export default function ContentTwo() {
  return (
    <section className="block content_two">
      <_wrapper>
        <div
          className="row flex flex-col place-items-center
        md:flex-row"
        >
          <div className="col hidden md:block sm:w-1/2">
            <img className="w-96" src="../phone.svg" />
          </div>
          <div className="col max-w-xl p-10">
            <_subheader>The Science of Social</_subheader>
            <p className="py-5">
              The Breakthrough Prizes are awarded each year to groundbreaking
              ideas in the areas of Physics, Mathematics and Life Sciences. See
              how Bloom Collective designed a custom content workflow to achieve
              their communications goals.
            </p>
            <button
              className="px-5 py-3 w-1/3
                text-gray-400
                border-2 border-gray-400
                hover:bg-gray-400 hover:text-black
                transition duration-300 ease-in-out
                transform hover:-translate-y-1 hover:scale-105"
            >
              Learn more
            </button>
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
